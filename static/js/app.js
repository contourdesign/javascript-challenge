// 
// from data.js
var tableData = data;

// reference the tbody 
var tbody = d3.select("tbody");

// console.log the data variable
console.log(tableData);

// array with the column names 
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"];


// loop through data, append each row to table
function loadData(){
    tableData.forEach(x => {
        var row = tbody.append("tr")
        columns.forEach(column => {
        row.append("td").text(x[column])    
        });
    });
};


// execute the function to populate the page with data
loadData();




// -------------------------------
// setup of variables for d3 elements
// make variable references according to id  
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

// variables for filter and reset button according to id 
var filterButton = d3.select("#filter-button");
var resetButton = d3.select("#reset-button");



// main function to initiate filter
function init(){

    // add'l prevention for no refresh
    d3.event.preventDefault();

    // extract the input for the fields in the table
    var Datevalue = inputDate.property("value");
    var Cityvalue = inputCity.property("value");
    var Statevalue = inputState.property("value");
    var Countryvalue = inputCountry.property("value");
    var Shapevalue = inputShape.property("value");

    // conditions filter the data for each filter value
    var filteredData = tableData.filter(function(d){
       return ((d.datetime === Datevalue || Datevalue == "" ) &&
                (d.city === Cityvalue || Cityvalue == "") &&
                (d.state === Statevalue || Statevalue == "") &&
                (d.country === Countryvalue || Countryvalue == "") &&
                (d.shape === Shapevalue || Shapevalue == "")
            )
    });

    // print to console to check things out
    console.log(filteredData);

    // before loading the data, empty the tbody 
    tbody.text("")

    // append data to the table
    filteredData.forEach(r => {
        var row = tbody.append("tr")
        columns.forEach(column => {
            row.append("td").text(r[column])    
        });
    });
};


// click event handler to filter the table with the given input
filterButton.on("click", init)

// to empty the tbody when the reset button is pressed
function resetData(){
    tbody.text("")
    loadData()
};
    
// click event handler to reset the table
resetButton.on("click", resetData);

