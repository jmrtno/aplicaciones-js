const colors = ['green', 'red', 'orange', 'yellow', 'purple', 'pink', 
                'blue', 'brown', 'lime','black', 'grey', 'white'];
const btn = document.getElementById('btn');
// Simple color
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
