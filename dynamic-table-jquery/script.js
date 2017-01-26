$(document).ready(function () {
    var objData = tableData;

    //create containers
    $(".container").append($("<div></div>").addClass("row")
        .append($("<div></div>").addClass("col-md-3")));

    //create form
    $(".col-md-3").append($("<form></form>").addClass("form-horizontal"));

    //create form input and "ADD" button.
    var formArray = ["FirstName :", "LastName :", "Age :"];
    var i;
    for (i = 0; i < formArray.length; i++) {
        $("form").append($("<div></div>").addClass("form-group")
            .append($("<label></label>").addClass("control-lable")
                .append(formArray[i]))
            .append($("<input type='text'>").addClass("form-control")));

        if (i + 1 == formArray.length) {
            $("form").append($("<div></div>").addClass("form-group")
                .append($("<button></button>").addClass("btn btn-default").append("ADD")
                    .click(function () {
                        //save input data and pass to fuction that add a new row.
                        event.preventDefault()
                        var array = [];
                        var inputFromForm = $(".form-control");
                        var z;
                        for (z = 0; z < inputFromForm.length; z++) {
                            array.push(inputFromForm[z].value);

                        }
                        createDataRows(array);
                    })));
        }
    }

    //create table containers
    $(".row").append($("<div></div>").addClass("col-md-9")
        .append($("<table></table>").addClass("table table-bordered table-striped")
            .append($("<tbody></tbody>").append("<tr></tr>"))));

    //create table headers
    $("tr").append($("<th></th>").append("Functionality"));
    var arrayData = objData.table;
    var headerData;
    var firstObj = arrayData[0];
    for (headerData in firstObj) {
        $("tr").append($("<th></th>").append(headerData))
    }

    createDataRows(arrayData);

    //this function create new row and fill it with data.
    function createDataRows(Data) {
        var j;
        //if the data came fom string array (input fields), else: from JSON Obj.
        if (typeof Data[0] == 'string') {
            var tr = $("<tr></tr>");
            $("tbody").append(tr
                .append($("<td></td>")
                    .append($("<button></button>").addClass("btn btn-warning btn-sm")
                        .append("Delete").click(function () {
                            $(this).parent().parent().remove();
                        }))));

            var currObj = Data;
            var x
            for (x in currObj) {
                tr.append($("<td></td>").append((currObj[x])));
            }
        } else {
            for (j = 0; j < Data.length; j++) {
                var tr = $("<tr></tr>");
                $("tbody").append(tr
                    .append($("<td></td>")
                        .append($("<button></button>").addClass("btn btn-warning btn-sm")
                            .append("Delete").click(function () {
                                $(this).parent().parent().remove();
                            }))));

                var currObj = Data[j];
                var x
                for (x in currObj) {
                    tr.append($("<td></td>").append((currObj[x])));
                }
            }
        }
    }
});











