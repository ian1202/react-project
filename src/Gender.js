import React from 'react';

const Gender = (props) => {
    return(
        <div>
            <label>
            Gender
            </label>
            <div className="row gender">

                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 genderbutton">
                <input type="radio" id="radioMale" name="gender" value="male" onClick={props.handleChange}></input>
                <label for="radioMale" id="male">MALE</label>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 genderbutton">
                <input type="radio" id="radioFemale" name="gender" value="female" onClick={props.handleChange} ></input>
                <label for="radioFemale" id="female">FEMALE</label>
                </div>
            
            </div>

            </div>
    )
}


export default Gender;