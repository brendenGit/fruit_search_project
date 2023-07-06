const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// array of possible fruits we will be using to provide search suggestions
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
	'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber',
	'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry',
	'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
	'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee',
	'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit',
	'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya',
	'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo',
	'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit',
	'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// called when searchHandler() is run - when a keyup event occurs
// reduces our fruit array to return a new array that includes possible results
// uses .includes() to search the fruit array based on the users input from input.value
// returns arrays of strings that contain that set of characters
function search(str) {
	let results = fruit.reduce((resultsFruit, currentFruit) => {
		if (currentFruit.toLowerCase().includes(str.toLowerCase())) {
			resultsFruit.push(currentFruit);
			return resultsFruit;
		}
		return resultsFruit;
	}, []);
	console.log(results);
	return results;
}

// when the user updates the input we call search() and set the value of that function to our results variable
// we then set inputVal = to the length of that array we have returned from search()
// we then call showSuggestions() 
function searchHandler(e) {
	// TODO
	const results = search(e.target.value)
	const inputVal = results.length;
	showSuggestions(results, inputVal);
}


// showSuggestions will first start by removing any previous suggestions
// it will then check if the list we are handing in has a value <= 7 this limits the amount of results we display
// we then append new <li>'s to our <ul> once 7 or fewer results are found
function showSuggestions(results, inputVal) {

	// TODO
	if (suggestions.firstChild) {
		while (suggestions.firstChild) {
			suggestions.firstChild.remove();
		}
	}

	if (inputVal <= 7) {
		for (let fruit of results) {
			const fruitEle = document.createElement('li');
			fruitEle.innerText = fruit;
			suggestions.appendChild(fruitEle);
		}
	}
}


// once a user finds their desired suggestion and clicks on it an event is fired
// we update the input field to be the value (innerText) of that selected <li>
// we then clear the suggestions list by removing all <li>'s
function useSuggestion(e) {
	// TODO
	input.value = e.target.innerText;
	if (suggestions.firstChild) {
		while (suggestions.firstChild) {
			suggestions.firstChild.remove();
		}
	}
}


// even listeners for input and suggestion selection
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);