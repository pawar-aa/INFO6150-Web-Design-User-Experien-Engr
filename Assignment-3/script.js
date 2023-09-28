var countOfRows = 3;
var latestIndex = 0;
var counterOfCheckedBoxed =0;
var count=1;

function addNewRow() {
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var rows = document.getElementById("myTable").rows;
  var latestIndex;
  var length = 5;

  if (rows.length > 1) {
    latestIndex = parseInt(rows[rows.length - 2].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]) + 1;
  }
  else {
    latestIndex = 1;
  }

  var tdNode1 = document.createElement("tr");
  var parameter = "dropDownTextArea" + latestIndex;

  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
     `<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/> <br /><br /><img src="down.png" width="25px" onclick="displayHiddenRow('${parameter}')"/>`;
  
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (latestIndex);
  
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (latestIndex);

  var trAwardCell = document.createElement("td");
  trAwardCell.innerHTML = "Approved";

  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall";

  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA"

  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
  
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100%"
  
  tdNode1.appendChild(trCheckBoxCell);
  tdNode1.appendChild(trStudentCell);
  tdNode1.appendChild(trTeacherCell);
  tdNode1.appendChild(trAwardCell);
  tdNode1.appendChild(trSemesterCell);
  tdNode1.appendChild(trTypeCell);
  tdNode1.appendChild(trBudgetCell);
  tdNode1.appendChild(trPercentageCell);

  var tdnode2 = document.createElement("tr");
  tdnode2.className="dropDownTextArea";
  tdnode2.id = "dropDownTextArea"+ (latestIndex)
  console.log(tdnode2.id);
  tdnode2.style.display="none";

  var trSoleCell = document.createElement("td");
  trSoleCell.colSpan="8"
  trSoleCell.innerHTML = `

  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
  `;
  tdnode2.appendChild(trSoleCell);

  tbodyRef.appendChild(tdNode1);
  tbodyRef.appendChild(tdnode2);
  
  countOfRows++;

  if(tdnode2 != tbodyRef.lastElementChild){
    alert("Record not added!")
  }else{
    alert("Student "+latestIndex+" Record added successfully");
  }
}

 function displayHiddenRow(hiddenRow){

   const element = document.getElementById('myTable').rows[hiddenRow];
   if(element){
     element.style.display = ((element.style.display != "") ? "" : "none");
   }
   return false;
 }

function onCheckboxClick(checkbox) {

  var rowSelect = checkbox.parentElement.parentElement;
  var element = document.getElementById('button');
  var deleteColumn = document.getElementById('delete-column');
  var editColumn = document.getElementById('edit-column');

  var element = document.getElementById('button');
  if (checkbox.checked == true) {
    counterOfCheckedBoxed++;
    element.disabled = false;
  
    deleteColumn.style.display = "";
    editColumn.style.display = "";
    if(counterOfCheckedBoxed>0) rowSelect.style.backgroundColor = "yellow";

    element.style.backgroundColor="orange";
    element.style.borderColor="orange";

    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);

    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow(this)">Edit</button>';

    rowSelect.appendChild(editButton);

  } else {
    counterOfCheckedBoxed--;
    rowSelect.style.backgroundColor = "#fff";

    if(counterOfCheckedBoxed<1){
      element.style.backgroundColor="grey";
      element.disabled = true;
      deleteColumn.style.display = "none";
      editColumn.style.display = "none";
      element.style.borderColor="grey"; 
    }

    rowSelect.deleteCell(8);
    rowSelect.deleteCell(-1);

  }
}

function editRow(rowObject) {
  var tr = rowObject.parentElement.parentElement;
  var studentNumber = tr.cells[1].textContent;

  var userInput1 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[1].textContent);
  var userInput2 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[2].textContent);
  var userInput3 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[3].textContent);
  var userInput4 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[4].textContent);
  var userInput5 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[5].textContent);
  var userInput6 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[6].textContent);
  var userInput7 = prompt(`Edit details of Student ${studentNumber}`, tr.cells[7].textContent);

  if (userInput1 !== null && userInput2 !== null && userInput3 !== null &&
    userInput4 !== null && userInput5 !== null && userInput6 !== null && userInput7 !== null) {
    alert(`Student ${studentNumber} data updated successfully`);
  }
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement;
  tr.nextElementSibling.remove();
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  console.log("TR row data:",tr);
  
  count--;
  countOfRows--;
  counterOfCheckedBoxed--;
  alert("Student "+ tr.cells[1].textContent +" Record deleted successfully");

  if(counterOfCheckedBoxed == 0){
    changeColor();
    var element = document.getElementById('button');
    element.disabled = true;
  }
  
}

function changeColor(){
  var element = document.getElementById('button')
  var deleteColumn = document.getElementById('delete-column');
  var editColumn = document.getElementById('edit-column');
  if(counterOfCheckedBoxed == 0){
    element.style.backgroundColor="grey";
    element.style.borderColor="grey";
    deleteColumn.style.display = "none";
    editColumn.style.display = "none";
  }
  
}

function submitButton(){
  alert("Submit Button Enabled");
}

