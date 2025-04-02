import React from "react";
import iconClock from "../../img/clock-3-48.png";
export const Digitos = (props) => {
    return(

        <div className="contador">
            <div className="iconRelog">
                <img src={iconClock} alt="" />
            </div>
            <div className="two">{props.digitSeis}</div>
            <div className="two">{props.digitCinco}</div>
            <div className="two">{props.digitCuatro}</div>
            <div className="two">{props.digitoTres}</div>
            <div className="two">{props.digitoDos}</div>
            <div className="one">{props.digitoUno}</div>
            
        </div>
    )
}


// let counter = 0;

// setInterval(function(){
//   SimpleCounter.digitFour= Math.floor(counter/1000); 
//   SimpleCounter.digitThree = Math.floor(counter/100);
//   SimpleCounter.digittwo = Math.floor(counter/10); 
//   SimpleCounter.digitOne = Math.floor(counter/1) ;

//   counter ++;
// }, 1000);


