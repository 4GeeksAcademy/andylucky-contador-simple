import React from "react";
import { Digitos } from "./digitos";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (

            <div className="wrapper">
			<h3>Contador</h3>
	
			<Digitos 
			digitoUno={props.digitOne} 
			digitoDos={props.digitTwo} 
			digitoTres={props.digitThree} 
			digitCuatro={props.digitFour}
			digitCinco={props.digitFive }
			digitSeis={props.digitSix}  />
		
			</div>
	
		
	);
};

export default Home;