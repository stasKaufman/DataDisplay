function createBasicTable() {

    var objData = tableData;
    var holdElement;

    //create the containers
    holdElement = createDiv(document.getElementsByClassName('container')[0], "row");
    holdElement = createDiv(holdElement, "col-md-3");

    //create form
    holdElement = createForm(holdElement, "form-horizontal");
    var arrayInput = ["FirstName :", "LastName :", "Age :"];
    var j;
    for (j = 0; j < arrayInput.length; j++) {
        holdElement = createDiv(document.getElementsByTagName("form")[0], "form-group");
        holdElement = createLabel(holdElement, "control-label");
        text = document.createTextNode(arrayInput[j]);
        holdElement.appendChild(text);
        holdElement = createInput(document.getElementsByClassName("form-group")[j], "text", "form-control")
    }

    //create submit button
    holdElement = createDiv(document.getElementsByTagName("form")[0], "form-group");
    holdElement = createButton(holdElement, "btn btn-default");
    text = document.createTextNode("ADD");
    holdElement.appendChild(text);
    holdElement.addEventListener("click", addButton);

    //create table containers
    holdElement = createDiv(document.getElementsByClassName("row")[0], "col-md-9");
    holdElement = createTable("table", holdElement, "table table-bordered table-striped margin");
    holdElement = createTable("tbody", holdElement, null);

    var arrayData = objData.table;

    //create tableHeaders
    var i;
    for (i = 0; i < arrayData.length; i++) {
        if (i == 0) {
            holdElement = createRow(holdElement);
            holdElement = createTableHeader(holdElement);
            var text = document.createTextNode("Functionally");
            holdElement.appendChild(text);

            var firstObj = arrayData[0];
            var headerData;
            for (headerData in firstObj) {
                holdElement = createTableHeader(document.getElementsByTagName("tr")[0]);
                text = document.createTextNode(headerData);
                holdElement.appendChild(text);
            }
        }
        createDataRows(arrayData[i]);
    }
}

//this function populate the fields with data
function createDataRows(arrayData) {
    //add delete button
    var holdElement = createRow(document.getElementsByTagName("tbody")[0]);
    holdElement = createTableData(holdElement);
    holdElement = createButton(holdElement, "btn btn-warning btn-sm");
    text = document.createTextNode("Delete");
    holdElement.appendChild(text);
    holdElement.addEventListener("click", deleteButtons);

    //fill data from JSON
    var currArray = arrayData;
    var x;
    for (x in currArray) {
        holdElement = createTableData(document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1]);
        var text = document.createTextNode(currArray[x]);
        holdElement.appendChild(text);
    }
}

//add new row to the table with data from to the form input
function addButton() {
    event.preventDefault()
    var array = [];
    var i;
    var inputArray = document.getElementsByClassName("form-control");
    for (i = 0; i < inputArray.length; i++) {
        array.push(inputArray[i].value);
    }
    createDataRows(array);
}

//delete row.
function deleteButtons() {
    var tbodyParent = this.parentNode.parentNode.parentNode;
    var rowChild = this.parentNode.parentNode;
    tbodyParent.removeChild(rowChild);

}


//all the rest of the function are for creating elements.
function createDiv(appendElement, setClass) {
    var createElement = document.createElement("div");
    appendElement.appendChild(createElement);
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}

function createTable(newElement, appendElement, setClass) {
    var createElement = document.createElement(newElement);
    appendElement.appendChild(createElement);
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}

function createRow(appendElement) {
    var createElement = document.createElement("tr");
    appendElement.appendChild(createElement);
    return createElement;
}

function createTableData(appendElement) {
    var createElement = document.createElement("td");
    appendElement.appendChild(createElement);
    return createElement;
}

function createTableHeader(appendElement) {
    var createElement = document.createElement("th");
    appendElement.appendChild(createElement);
    return createElement;
}
function createButton(appendElement, setClass) {
    var createElement = document.createElement("button");
    appendElement.appendChild(createElement);
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}

function createForm(appendElement, setClass) {
    var createElement = document.createElement("form");
    appendElement.appendChild(createElement);
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}

function createLabel(appendElement, setClass) {
    var createElement = document.createElement("lable");
    appendElement.appendChild(createElement);
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}

function createInput(appendElement, setType, setClass) {
    var createElement = document.createElement("input");
    appendElement.appendChild(createElement);
    if (setType != null) {
        createElement.setAttribute("type", setType);
    }
    if (setClass != null) {
        createElement.setAttribute("class", setClass);
    }
    return createElement;
}











