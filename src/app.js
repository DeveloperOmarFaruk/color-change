// Array data create
// Selector
// Loop Create
// addEventListener

const colors = ['red',
    'yellow',
    'green',
    'blue',
    'orange',
    'purple',
    'violet',
    'indigo',
    'aqua',
    'brown',
    'chartreuse',
    'chocolate',
    'crimson',
    'darkcyan',
    'darkolivegreen',
    'gold',
    'khaki',
    'gray',
    'hotpink',
    'orange',
];

const container = document.querySelector('#container');
const h3 = document.querySelector('h3');
const selectedColor = document.querySelector('#selectedColor');


for (let color of colors) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor = color;



    box.addEventListener('mouseover', function() {
        h3.innerText = 'You have selected: ';
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.backgroundColor = box.style.backgroundColor;
    })
}