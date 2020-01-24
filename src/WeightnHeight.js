import React from 'react';

class WeightnHeight extends React.Component{
    render(){
        return(
            <div className="row heightnweight">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 weight">
              <label>
                Weight
              </label>
              <div>
                <input type="text" name="weight" maxLength="3" onChange={this.handleChange} required/>
                <span id="unit"> KG </span>
              </div>
            </div>  

            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 height">
              <label>
                Height
               </label>
            <div>
                <input type="text" name="height" maxLength="3" onChange={this.handleChange} requried/>
                <span id="unit"> CM </span>
            </div>
            </div>
          </div>
        )
    }
}

export default WeightnHeight;