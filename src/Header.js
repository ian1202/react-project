import React from 'react';
import { FaDumbbell } from 'react-icons/fa'



class Header extends React.Component {

  
    render(){
  
      return(
        <header className="header" id="header">
          <div className="container-fluid">
            <div className="row nav">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h1>MACRO <br/>
                CALCULATOR</h1>
                <span><FaDumbbell className="faiconimg4"/></span>
              </div>
            </div>
  
            <div className="row title">
              <div className="col-sm-12 col-md-12 col-lg-12" id="about">
                <p>Scientifically Proven and Individually Bespoke  </p>
                <h5> Designed and Coded By <a href="https://ian1202.github.io/ianyen.github.io/" target="_blank" rel="noopener noreferrer"><b>Ian Yen</b></a> </h5>
                <span> <a id="calculatorbutton" href="#calculator"> GET STARTED </a> </span>
              </div>
              </div>
          </div>
      </header>
  
      )
    }
  }

  export default Header;