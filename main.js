"use strict";

var coffees = [];


if(typeof(Storage) !== null) {
    coffees = JSON.parse(localStorage.getItem('coffeeArray'));
} else {
    coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'}
    ];
    localStorage.setItem("coffeeArray",JSON.stringify(coffees));
    console.log(JSON.parse(localStorage.getItem("coffeeArray")));

}

function originalArray(){
    coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'}
    ];
    localStorage.setItem("coffeeArray",JSON.stringify(coffees));
    tbody.innerHTML = renderCoffees(coffees);

}
function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += '<h4 class = "coffeeLabel">' + coffee.name + '</h6>';
    html += '<p class = "coffeeLabelTwo">' + coffee.roast + '</p>';
    html += '</div>';
    // html += '<br>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);

    }
    return html;
}

function newCoffees(e){
    e.preventDefault();
    var newCoffee = {
        id: coffees.length,
        name: newCoffeeName.value,
        roast: newRoast.value
    };
    console.log(newCoffee);
    coffees.push(newCoffee);
    localStorage.setItem("coffeeArray", JSON.stringify(coffees));
    tbody.innerHTML = renderCoffees(coffees);

}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast == "all"){
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function getCoffee(){
    var search = document.getElementById("coffeeName").value;
    var filterCoffees=[];
    var selectedRoast = roastSelection.value;
    console.log(search);
    coffees.forEach(function(coffee) {
        var coffeName = coffee.name.toLowerCase();
        var lowerSearch = search.toLowerCase();
        if (coffeName.includes(lowerSearch) == true && coffee.roast === selectedRoast) {
            filterCoffees.push(coffee);
        }else if(coffeName.includes(lowerSearch) == true && selectedRoast === "all"){

            filterCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filterCoffees);

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'}
// ];
//push
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var addButton = document.querySelector('#addRoast');
var roastSelection = document.querySelector('#roast-selection');
var findCoffee = document.getElementById('coffeeName');
var resetArray = document.getElementById('clearData');
resetArray.addEventListener('click', originalArray);
findCoffee.addEventListener("keyup", getCoffee, false);
var clickRoast = document.getElementById("roast-selection");
clickRoast.addEventListener('change', updateCoffees);
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
addButton.addEventListener('click', newCoffees);
