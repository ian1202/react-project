import React from 'react';
import { FaBed } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';

const Introduction = () => {
    return(
        <div className="container-fluid introduction" id="introduction">
            <div className="text-center">
                <h1> What Is This? </h1>
            </div>
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 intro1">
                    <FaBed className="circleicon"/>
                    <h2> MACROS </h2>
                    <p> Macronutrients (aka Macros) are carbs, protein and fat that your body needs as a source of energy. Each of them has a unqiue set of properties that influece health and physique, and the oprtimal balance of their contribution to the diet is key to achieving your fitness goal. </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 intro2">
                    <FaUtensils className="circleicon"/>
                    <h2> ALGORITHM </h2>
                    <p> This calculator is unique in that it takes into account not ony your BMI, but also your body type, activity level and primary goal. It employs the <a href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation" target="_blank" rel="noopener noreferrer"> Harris-Benedict Equation </a>, adjusted by individual variables, to generate your total daily energy expenditure and thereby your marcos. </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 intro3">
                    <FaRunning className="circleicon"/>
                    <h2> HOW </h2>
                    <p> To find out your macros, simply fill out the form below– just make sure you do not miss any fields. </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 intro4">
                    <FaRedo className="circleicon"/>
                    <h2> WHO </h2>
                    <p> To find out more about myself and my other work, please visit my <a href="https://ian1202.github.io/ianyen.github.io/" target="_blank" rel="noopener noreferrer"><b>Portfolio. </b></a> </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;