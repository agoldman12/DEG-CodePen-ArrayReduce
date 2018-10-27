/* 
Below we have an array of objects. Each object represents a person.

Goal: Learn to use the Array.reduce method

Task: Calculate the totalNumHorses owned by the people in the people array

For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/



const people = [
	{name: 'Robb Stark', numHorses: 10},
	{name: 'Danerys Targaryen', numHorses: 13},
	{name: 'Cersei Lannister', numHorses: 29},
	{name: 'Jon Snow', numHorses: 2},
	{name: 'Lysa Aryn', numHorses: 50},
	{name: 'Arya Stark', numHorses: 0}
];

var totalNumHorses = people.reduce((acc, people)=>{
		return acc + people.numHorses; 
}, 0 );


document.querySelector('div').innerHTML = "The total number of horses owned is " + totalNumHorses + ".";





