import React from 'react';


const ExerciseLevel = (props) => {
    return(
        <div>
            <label>
               Exercise Level
            </label>
              <div className="row exerciselevel">
              
              <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <input type="radio" id="radioSedentary" name="exerciselevel" value="sedentary" onClick={props.handleChange}></input>
              <label for="radioSedentary">SEDENTARY <p>(NO EXERCISE)</p></label>
              </span>

              <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <input type="radio" id="radioModerate" name="exerciselevel" value="moderate" onClick={props.handleChange}></input>
              <label for="radioModerate">MODERATE <p>(1-3 DAYS/ WEEK)</p></label>
              </span>

              <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <input type="radio" id="radioActive" name="exerciselevel" value="active" onClick={props.handleChange}></input>
              <label for="radioActive">ACTIVE <p>(3-5 DAYS/ WEEK)</p></label> 
              </span>

              <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <input type="radio" id="radioVeryActive" name="exerciselevel" value="veryactive" onClick={props.handleChange}></input>
              <label for="radioVeryActive">VERY ACTIVE <p>(6-7 DAYS/ WEEK)</p></label> 
              </span>

              </div>
          </div> 
    )
}


export default ExerciseLevel;