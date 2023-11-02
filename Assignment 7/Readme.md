# Assignment 7 Simple Calculator and Stopwatch Web Applications

Name: Aashay Pawar
NUID: 002134382

This repository contains two separate web applications: a simple calculator and a stopwatch, each designed to demonstrate specific front-end development skills.

## Part A: Simple Calculator Web Application

### Description

The simple calculator application is a two-page web application with the following specifications:

#### Login Page

- **Fields**: Email, User Name, Password, Confirm Password.
- **Button**: Login button (disabled by default).
- **Validations**: Null check, special characters check, length check, email validation (only northeastern emails accepted).
- **Error Messages**: Displayed below the fields in red without using pop-ups.
- **Technology**: JQuery for all validations and enabling the login button upon successful validation.
- **Redirection**: Upon validation, the user is redirected to the second page, displaying the logged-in UserName.

#### Calculator Page

- **Fields**: Number 1 and Number 2 for user input.
- **Buttons**: Add, Subtract, Multiply, Divide.
- **Result Display**: Shows the result of the operation in a non-editable third field.
- **Validations**: Only numbers accepted, null check, special character check, infinite value check.
- **Error Messages**: Displayed below the input fields without using pop-ups.
- **Operations**: All operations are performed using a single arrow function in JQuery.
- **Styling**: Basic CSS for layout and design.

## Part B: Stopwatch Web Application

### Description

The stopwatch application is a single-page application that includes:

- **Display**: Non-editable label displaying time in HH:MM:SS format, initially set to 00:00:00.
- **Date Picker**: Displays the current date, with the ability to select past and future dates, but non-editable.
- **Buttons**: Start, Stop, Reset.
  - **Start**: Begins the stopwatch.
  - **Stop**: Pauses the stopwatch.
  - **Reset**: Resets time to 00:00:00.
- **Technology**: Use of Async, Await, Promises, setInterval, and clearInterval for stopwatch functionality.
- **Styling**: Basic CSS for layout and design.

## Getting Started

To run these applications, clone the repository to your local machine and open the `index.html` file for each part in a web browser.

## Prerequisites

You will need a web browser that supports HTML5, CSS3, and JavaScript with JQuery. No additional installations are required.

## Usage

For the calculator application, start at the login page and enter valid credentials to proceed to the calculator. For the stopwatch application, simply open the `index.html` file and use the provided buttons to operate the stopwatch.
