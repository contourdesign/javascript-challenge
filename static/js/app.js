// from data.js
var tableData = data;

// Reference the tbody in the html
var tbody = d3.select("tbody");

// Console.log the data variable
console.log(tableData);

// Create array with the column names 
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"];

// Loop through data, append each row to html table
function loadData(){
    tableData.forEach(x => {
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" || column == "country"){
                row.append("td").text(x[column])
            }
              else row.append("td").text(x[column])    
        })
    })
}

loadData()
