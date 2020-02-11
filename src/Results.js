import React from 'react';
import { FaBacon } from 'react-icons/fa';
import { FaDrumstickBite } from 'react-icons/fa';
import { FaBreadSlice } from 'react-icons/fa';


//results
const Results = (props) => {
    return(
      <div>
        <div className= "container-fluid mainresults">
         <h2> Your Daily Calories: <h3>{props.goaldata} Kcal </h3> </h2>
        </div>

        <div className="row text-center results">
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 faicon1">
             <FaBreadSlice className="faiconimg1"/>
               <h1> Carbs </h1>
               <h2> {props.carbsdata} G </h2>
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 faicon2">
             <FaBacon className="faiconimg2"/>
               <h1> Fat </h1>
               <h2> {props.fatdata} G  </h2>
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 faicon3">
             <FaDrumstickBite className="faiconimg3"/>
             <h1> Protein </h1>
             <h2> {props.proteindata} G </h2>
           </div>
        </div>
       </div>
    )
  };

  export default Results;