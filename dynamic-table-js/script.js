function createBasicTable() {

    var objData = JSON.parse(tableData);
    var holdElement;

    holdElement = createAppendSet("div", document.getElementsByClassName('container')[0], "row");
    holdElement = createAppendSet("div", holdElement, "col-md-12");
    holdElement = createAppendSet("table", holdElement, "table table-bordered table-striped margin");
    holdElement = createAppendSet("tbody", holdElement, null);

    var array = objData.table;

    var i;
    for (i = 0; i < array.length; i++) {

        if (i == 0) {
            holdElement = createAppendSet("tr", holdElement, null);

            holdElement = createAppendSet("th", holdElement, null);
            var text = document.createTextNode("Functionally");
            holdElement.appendChild(text);

            var currElement = array[0];
            var headerData;
            for (headerData in currElement) {

                var header = document.createElement("TH");
                document.getElementsByTagName("tr")[0].appendChild(header);
                text = document.createTextNode(headerData);
                header.appendChild(text);
            }
        }

        holdElement = createAppendSet("tr", document.getElementsByTagName("tbody")[0], null);
        holdElement = createAppendSet("td", holdElement, null);
        holdElement = createAppendSet("span", holdElement, null);
        holdElement = createAppendSet("button", holdElement, "btn btn-warning btn-sm")

        text = document.createTextNode("Delete");
        holdElement.appendChild(text);
        holdElement.addEventListener("click", deleteButtons);

        //
        var arrayData = ["Fname:", "Lname:", "Age:"];
        var j;
        for (j = 0; j < arrayData.length; j++) {
            holdElement = createAppendSet("span", document.getElementsByTagName("td")[i * 4], null);
            text = document.createTextNode(arrayData[j]);
            holdElement.appendChild(text);


            var curHoladElement = createAppendSet("input", holdElement, "form-control")
            curHoladElement.setAttribute("type", "text");

        }

        holdElement = createAppendSet("span", document.getElementsByTagName("td")[i * 4], null);
        holdElement = createAppendSet("button", holdElement, "btn-success btn-sm");
        holdElement.addEventListener("click", submitButton);
        text = document.createTextNode("Submit");
        holdElement.appendChild(text);
        var x;
        var currArray = array[i];
        for (x in currArray) {
            holdElement = createAppendSet("td", document.getElementsByTagName("tr")[i + 1], null);
            text = document.createTextNode(currArray[x]);
            holdElement.appendChild(text);
        }
    }
}

function createAppendSet(create, append, set) {
    var createdElement = document.createElement(create);
    append.appendChild(createdElement);
    if (set != null) {
        createdElement.setAttribute("class", set);
    }
    return createdElement;
}

function submitButton() {
    var array = [];
    //get to span element.
    var input = this.parentNode.previousSibling;
    var i = 0;
    while (i < 3) {
        array.push(input.childNodes[1].value);
        input = input.previousSibling;
        i++;
    }

    var output = this.parentNode.parentNode.nextSibling;
    var i = 2;
    while (i >= 0) {
        output.innerHTML = array[i];
        output = output.nextSibling;
        i--;
    }
}

function deleteButtons() {
    var tdElement = this.parentNode.parentNode.nextSibling;
    while (tdElement != null) {
        tdElement.innerHTML = "";
        tdElement = tdElement.nextSibling;
    }
}








