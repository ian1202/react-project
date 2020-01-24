import React from 'react';

const PrimaryGoal = (props) => {
    return(

    <div>
        <label>
        Your Primary Goal
        </label>
        <div className="row primarygoal">

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <input type="radio" id="radioLose" name="primarygoal" value="loseweight" onClick={props.handleChange}></input>
        <label for="radioLose">LOSE WEIGHT</label>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <input type="radio" id="radioGain" name="primarygoal" value="gainweight" onClick={props.handleChange}></input>
        <label for="radioGain">GAIN WEIGHT</label>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <input type="radio" id="radioMaintain" name="primarygoal" value="maintain" onClick={props.handleChange}></input>
        <label for="radioMaintain">MAINTAIN </label> 
        </div>
        
    </div>

    </div>

    )
}


export default PrimaryGoal;

