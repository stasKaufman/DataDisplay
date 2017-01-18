
document.addEventListener("DOMContentLoaded",
function createBasicTable() {
    var objData = JSON.parse(tableData);
    var table = document.createElement("TABLE");
    document.getElementsByClassName('container')[0].appendChild(table);
    table.setAttribute("class", "table table-bordered table-striped margin");

    var array = objData.table;

    var i;
    for (i = 0; i < array.length; i++) {

        if(i == 0) {
            var row = document.createElement("TR");
            table.appendChild(row);
            var currElement = array[0];
            var y;
            for (y in currElement) {
                var header = document.createElement("TH");
                row.appendChild(header);
                var text = document.createTextNode(y);
                header.appendChild(text);
            }
        }
        var row = document.createElement("TR");
        table.appendChild(row);
        var x;
        var currArray = array[i];
        for (x in currArray) {
            var data = document.createElement("TD");
            row.appendChild(data);
            var text = document.createTextNode(currArray[x]);
            data.appendChild(text);
        }
    }
})








