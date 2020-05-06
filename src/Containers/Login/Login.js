import React from 'react';
import { Link, Route } from 'react-router-dom';
function Login() {

  return (

    <section className="Banner">
        <audio  src="./sound/sound1.mp3" autoPlay></audio>
          
        <article className="Banner__background">
        <img  className="Banner__background" src="./images/bg.png" alt="" />
        </article>
        

      <div className="Banner__left">
        <article className="Banner__left-top">
        <p >¡ES HORA DE CREAR TU UNIVERSO!</p> 
        </article>

        <article className="Banner__left-center">
          <p>Crearas tu propio universo aprendiendo formas, colores y numeros.</p>
        </article>

        <article className="Banner__left-bottom">
       
        <Link to="/game"><button className="btn__login">Iniciar</button></Link>
      
        </article>

      </div>
      <div className="Banner-right">
        <section className="Banner-right--animation" >

        <img className="Banner-right--animation__planet" src="./images/planet.svg" alt="" />
        <img className="Banner-right--animation__astronaut" src="./images/austro.svg" alt="" />
        
        </section>
      </div>
    </section>
  );
}


export default Login;