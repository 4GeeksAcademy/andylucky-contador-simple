import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
const app = ReactDOM.createRoot(document.getElementById('root'));
// components
import Home from './components/Home';



let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

const elIntervalo = setInterval(() => {
  app.render(
  <React.StrictMode>
    <Home digitOne={counter1} digitTwo={counter2} digitThree={counter3} digitFour={counter4}  digitFive={counter5} digitSix={counter6} />
  </React.StrictMode>,
);
counter1++
if (counter1 > 9) {
  counter1 = 0;
  counter2++
}
if (counter2 > 9) {
  counter2 = 0;
  counter3++
}
if (counter3 > 9) {
  counter3 = 0;
  counter4++
}
if (counter4 > 9) {
  counter4 = 0;
  counter5++
}
if (counter5 > 9) {
  counter5 = 0;
  counter6++
}
if(counter6===1){
clearInterval(elIntervalo)
}

}, 1000);


