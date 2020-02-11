import React from 'react';

const Age = (props) => {
    return(
        <div className="age">
            <label>
               Age
            </label>
            <div>
              <input type="number" name="age" onChange={props.handleChange} min="1" max= "99" required="true"/>
            </div>
        </div> 
    )

}


export default Age;