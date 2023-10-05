const form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

const validationFlags = {
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    zipcode: false
};

const regexPatterns = {
    firstName: /^[a-zA-Z]{2,50}$/,
    lastName: /^[a-zA-Z]{2,50}$/,
    emailId: /^[\w\.]{1,252}@(northeastern+)\.(edu)$/, 
    phoneNumber: /^\d{3}-\d{3}-\d{4}(?:-\d{6})?$/,
    zipcode: /^[0-9]{5}(?:-[0-9]{4})?$/,
    product: /^[a-zA-Z\s]{2,100}$/
};


const fields = ["firstName", "lastName", "emailId", "phoneNumber", "zipcode"];

fields.forEach(field => {
    const element = document.getElementById(field);
    element.addEventListener("input", validate);
});


function validate(e) {
    const type = e.target.id;
    const value = e.target.value.trim();
    const errorElement = document.getElementById(`error_${type}`);

    if (!value.match(regexPatterns[type])) {
        errorElement.style.display = "block";
        e.target.style.border = "2px solid red";
        validationFlags[type] = false;
    } else {
        errorElement.style.display = "none";
        e.target.style.border = "";
        validationFlags[type] = true;
    }
}

function validateComments() {
    const comments = document.getElementById("comments");
    return comments.value.trim() !== "";
}

function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="link"]:checked');
    return checkboxes.length > 0;
}


function submitted(e) {
    e.preventDefault();

    // Not working
    if (!validateCheckboxes()) {
        alert("Please select at least one source from 'How did you hear'");
        return;
    }

    if (!validateComments()) {
        alert("Please provide your comments");
        return;
    }

    const isValid = Object.values(validationFlags).every(val => val);
    if (isValid) {
        alert("Data Saved Successfully");
                    document.getElementById("table").style.display="block";
                
                    var table = document.getElementById("table");
                    var row = table.insertRow(-1);
                    var title = row.insertCell(0);
                    var firstName = row.insertCell(1);
                    var lastName = row.insertCell(2);
                    var emailId =row.insertCell(3);
                    var phoneNumber = row.insertCell(4);
                    var address1 =row.insertCell(5);
                    var address2 = row.insertCell(6);
                    var city = row.insertCell(7);
                    var state = row.insertCell(8);
                    var zipcode = row.insertCell(9);
                    var hear = row.insertCell(10);
                    var comments = row.insertCell(11);
                    var selectProduct = row.insertCell(12);

                    title.innerHTML = document.querySelector('input[name="title"]:checked').value;

                    firstName.innerHTML = document.getElementById("firstName").value;
                    lastName.innerHTML = document.getElementById("lastName").value;
                    emailId.innerHTML = document.getElementById("emailId").value;

                    phoneNumber.innerHTML = document.getElementById("phoneNumber").value;
                    address1.innerHTML = document.getElementById("streetAddress1").value;
                    address2.innerHTML = document.getElementById("streetAddress2").value;
                    

                    city.innerHTML = document.getElementById("city").value;
                    state.innerHTML = document.getElementById("state").value;
                    zipcode.innerHTML = document.getElementById("zipcode").value;
                    
                    var checks=$('input[name="link"]:checked').map(function(){
                        return $(this).val();
                    }).get()

                    console.log(checks);
                    hear.innerHTML = checks;
                    comments.innerHTML = document.getElementById("comments").value;
                    selectProduct.innerHTML = document.getElementById("xyz").value;

                    document.getElementById("dynamicCheckbox").style.display = "none";
                    document.getElementById("text_area").style.display = "none";

                    form.reset();
    } else {
        alert("Please enter correct details");
    }
}

function addTextField(e) {
    const textarea = document.getElementById("text_area");
    textarea.style.display = e.target.checked ? "block" : "none";
}

const productsMapping = {
    "MacBook Air": "MacBook Air - 13 Inch",
    "MacBook Pro": "MacBook Pro - 13 Inch",
    "Iphone 14": "Iphone 14 - Red",
    "Iphone 14 Pro": "Iphone 14 Pro - Midnight",
    "AirPods": "AirPods - 2nd"
};

function addCheckbox(e) {
    const selected = e.target.value;
    const dynamicCheckbox = document.getElementById("dynamicCheckbox");
    const checkboxSelectDynamic = document.getElementById("checkboxSelectDynamic");
    const spanTag = document.getElementById("spanTag");

    if (productsMapping[selected]) {
        dynamicCheckbox.style.display = "block";
        checkboxSelectDynamic.value = "hi";
        spanTag.innerHTML = productsMapping[selected];
    } else {
        dynamicCheckbox.style.display = "none";
    }
}

document.getElementById("optionSelect").addEventListener("change", addCheckbox);
document.getElementById("checkboxSelectDynamic").addEventListener("change", addTextField);