const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user'); // Import the User model
const bcrypt = require('bcrypt');
const path = require('path');


const app = express();
const PORT = 2000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// API Endpoint: Create User
app.post('/user/create', async (req, res) => {
  try {
    // Basic validation for email, full name, and password
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Please provide full name, Northeastern email, and password' });
    }

    // Validate email format and domain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email) || !req.body.email.endsWith('@northeastern.edu')) {
    return res.status(400).json({ message: 'Invalid email format or domain' });
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(req.body.password)) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters long and contain at least one letter and one number',
      });
    }

    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error create' });
  }
});

// API Endpoint: Delete User
app.delete('/user/delete', async (req, res) => {
    try {
      if (!req.body.email) {
        return res.status(400).json({ message: 'Please provide email for user deletion' });
      }
  
      const user = await User.findOneAndDelete({ email: req.body.email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error delete' });
    }
  });
  

  // API Endpoint: Get All Users
app.get('/user/getAll', async (req, res) => {
    try {
      const users = await User.find({}, 'fullName email');
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error getall' });
    }
  });

// API Endpoint: Update User
app.put('/user/edit', async (req, res) => {
    try {
      // Implement validation for full name and password here
      if (!req.body.email) {
        return res.status(400).json({ message: 'Please provide email for user update' });
      }
  
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update full name and password if provided
      if (req.body.fullName) {
        user.fullName = req.body.fullName;
      }
  
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      await user.save();
  
      res.json({ message: 'User details updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error update' });
    }
  });

  // Add this endpoint to server.js

  app.get('/user/login', (req, res) => {
    // Using __dirname to get the current directory
    res.sendFile(path.join(__dirname, 'models', 'login.html'));
  });

app.post('/user/login', async (req, res) => {

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error login' });
  }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and db Name is myDB`);
  });
  