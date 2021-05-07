// const button = document.getElementById('button');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const green = document.getElementById('green');
const colour = ['red','blue','green'];
const target = document.querySelector('.target');
let count = 0
let score = document.getElementById('score_id')






// button.addEventListener('click',startGame);
blue.addEventListener('click',generateColour);
red.addEventListener('click',generateColour);
green.addEventListener('click',generateColour);

let countdown = 10;
function startGame() {
  setInterval(timer, 1000);


  target.innerHTML = colour[Math.floor(Math.random() * colour.length)]
  target.style.color = colour[Math.floor(Math.random() * colour.length)]

}

function generateColour(e) {
  let btn = e.currentTarget


  if (btn.id == target.style.color) {
    console.log('correct')
    count++

  } else {
    count = 0

     console.log('wrong')
} score.innerHTML = count


  target.innerHTML = colour[Math.floor(Math.random() * colour.length)]
  target.style.color = colour[Math.floor(Math.random() * colour.length)]

 }

function timer(){
   document.getElementById('time').innerHTML = countdown;
  if (countdown==0){
    clearInterval(timer);
    alert('Game over, Press Ok to Restart the Game')
    location.reload();
  }
  countdown--;
}
