// from data.js
var tableData = data;

// reference the tbody 
var tbody = d3.select("tbody");

// console.log the data variable
console.log(tableData);

// Create array with the column names 
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"];

// Loop through data file, append each row to table
function loadData(){
    tableData.forEach(x => {
        var row = tbody.append("tr")
        columns.forEach(column => {
        row.append("td").text(x[column])    
        });
    });
};

// execute the function
loadData();

// -------------------------------
// setup of variables for d3 elements
// make variable references according to id  
var inDate = d3.select("#datetime");
var inCity = d3.select("#city");
var inState = d3.select("#state");
var inCountry = d3.select("#country");
var inShape = d3.select("#shape");

// variables for filter and reset button according to id 
var filterButton = d3.select("#filter-button");
var resetButton = d3.select("#reset-button");



