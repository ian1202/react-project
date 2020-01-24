import React from 'react';
import { FaDumbbell } from 'react-icons/fa'

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
      this.toggleMenu = this.toggleMenu.bind(this);
    }
  
    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }
  
    render(){
  
      const show = (this.state.menu) ? "show" : "" ;
  
      return(
        <header className="header" id="header">
          <div className="container-fluid">
            <div className="row nav">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h1>MACRO <br/>
                CALCULATOR</h1>
                <span><FaDumbbell className="faiconimg4"/></span>
                  <nav className="navbar navbar-expand-md navbar-right">
                    <button className="navbar-toggler navbar-dark navbar-right" id="toggler" type="button" onClick={ this.toggleMenu }>
                      <span className="navbar-toggler-icon"></span>
                    </button>
                      <div className={"collapse navbar-collapse " + show} id="myNavbar">
                        <ul className="navbar-nav">
  
                          <li className="nav-item active">
                            <a className="nav-link" href="#about">HOME <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#calculator">CALCULATOR</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#calculator">ABOUT ME</a>
                          </li>
                        </ul>
                      </div>
                  </nav>
              </div>
            </div>
  
            <div className="row title">
              <div className="col-sm-12 col-md-12 col-lg-12" id="about">
                <p>Scientifically Proven and Individually Bespoke  </p>
                <h5> Designed and Coded By <a href="https://ian1202.github.io/ianyen.github.io/" target="_blank" rel="noopener noreferrer"><b>Ian Yen</b></a> </h5>
                <span> <a id="calculatorbutton" href="#calculator"> Get My Macros </a> </span>
              </div>
              </div>
          </div>
      </header>
  
      )
    }
  }

  export default Header;