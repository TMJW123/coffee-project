"use strict";

function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += '<h3 class = "coffeeLabel">' + coffee.name + '</h3>';
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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function getCoffee(){
    var search = document.getElementById("coffeeName").value;
    console.log(search);
    for(var i = 0; i < coffees.length; i++) {
        var checkString = coffees[i].name;
        if(checkString.includes(search) == true){
            renderCoffee(coffees[i]);
            console.log(coffees[i].name);

        }

    }

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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
//push
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var findCoffee = document.getElementById('coffeeName');
findCoffee.addEventListener("keydown", getCoffee, false);


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
