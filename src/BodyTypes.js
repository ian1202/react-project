import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ectomorph from './assets/img/ectomorph.png';
import Mesomorph from './assets/img/mesomorph.png';
import Endomorph from './assets/img/endomorph.png';


const BodyTypes = (props) => {
    return(

        <div>
            <label>
            Which Best Describes You?
            </label>
            <div className="row text-center bodytype">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype1">
                <input type="radio" id="radioEctomorph" name="bodytype" value="ectomorph" onChange={props.handleChange}></input>
                <label for="radioEctomorph"> 
                <img src={Ectomorph} alt="ectomorph"></img> 
                <br/><span>1. ECTOMORPH</span> <p>Lean and long, with difficulty building muscle no matter how much you eat or lift</p>
                </label>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype2">
                <input type="radio" id="radioMesomorph" name="bodytype" value="mesomorph" onChange={props.handleChange}></input>
                <label for="radioMesomorph"> 
                <img src={Mesomorph} alt="mesomorph"></img> 
                <br/><span>2. MESOMORPH</span> <p>Muscular and well-built, with a high metabolism and responsive muscle cells</p>
                </label>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype3">
                <input type="radio" id="radioEndomorph" name="bodytype" value="endomorph" onChange={props.handleChange}></input>
                <label for="radioEndomorph"> 
                <img src={Endomorph} alt="endomorph"></img> 
                <br/><span>3. ENDOMORPH</span> <p>Big, high body fat, often pear-shaped, with a high tendency to store body fat</p></label> 
                </div>
            </div>
         </div> 


    )
}


export default BodyTypes;
