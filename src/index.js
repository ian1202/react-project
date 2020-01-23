import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ectomorph from './assets/img/ectomorph.png';
import Mesomorph from './assets/img/mesomorph.png';
import Endomorph from './assets/img/endomorph.png';
import { FaBacon } from 'react-icons/fa';
import { FaDrumstickBite } from 'react-icons/fa';
import { FaBreadSlice } from 'react-icons/fa';
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




//calculator
class Calculator extends React.Component{
  constructor(props){
      super(props);
      this.state = { bodytype: '', gender: '', age: '', weight: '', height: '', exerciselevel:'', primarygoal:'', goal:'', basebmr:'', adjustedbmr:'', results: false, carbs:'', protein: '' , fat: ''};
      this.handleChange = this.handleChange.bind(this);
      this.calculateBaseBMR = this.calculateBaseBMR.bind(this);
      this.calculateAdjustedBMR = this.calculateAdjustedBMR.bind(this);
      this.calculateGoal = this.calcuateGoal.bind(this);
      this.calculateMacro = this.calculateMacro.bind(this);
      this.handleSubmit =this.handleSubmit.bind(this);
  }

handleChange (e) {
  this.setState({[e.target.name]: e.target.value});
};


calculateBaseBMR () {
  let gendercal = this.state.gender;
  let bmrresultmale = Math.round(66.4730 + (this.state.weight * 13.7516) + (this.state.height * 5.0033) - (this.state.age * 6.7550));
  let bmrresultfemale = Math.round(655.0955 + (this.state.weight * 9.5634) + (this.state.height * 1.8496) - (this.state.age * 4.6756));

  if(gendercal === "male"){
    this.setState({basebmr: bmrresultmale});
  }

  else if (gendercal === "female"){
    this.setState({basebmr: bmrresultfemale});
  }
}



calculateAdjustedBMR () {
  let exerciselevelcal = this.state.exerciselevel;
  let sedentary = Math.round(this.state.basebmr * 1.2);
  let moderate = Math.round(this.state.basebmr * 1.35);
  let active = Math.round(this.state.basebmr * 1.55);
  let veryactive = Math.round(this.state.basebmr * 1.75);

  if(exerciselevelcal === "sedentary"){
    this.setState({adjustedbmr: sedentary})
  }

  else if (exerciselevelcal === "moderate"){
    this.setState({adjustedbmr: moderate })
  }

  else if (exerciselevelcal ==="active"){
    this.setState({adjustedbmr: active} )
  }

  else if (exerciselevelcal === "veryactive"){
    this.setState({adjustedbmr: veryactive})
  }
  console.log(this.state.adjustedbmr)
}

calcuateGoal(){
  let primarygoal = this.state.primarygoal;
  let lose = Math.round(this.state.adjustedbmr - 500);
  let maintain = Math.round(this.state.adjustedbmr);
  let gain = Math.round(this.state.adjustedbmr + 500 );

  if (primarygoal === 'loseweight'){
    this.setState({goal : lose})
  }

  else if (primarygoal === 'gainweight'){
    this.setState({goal : maintain})
  }

  else if (primarygoal === 'maintain')
    this.setState({goal : gain})
  
}


calculateMacro(){
  let goal= this.state.goal;
  let bodytype = this.state.bodytype;
  let proteiningram="";
  let fatingram= "";
  let carbsingram= "";

  if (bodytype === 'ectomorph'){
    proteiningram = Math.round(goal * 0.25 /4);
    fatingram = Math.round(goal * 0.2 / 9);
    carbsingram = Math.round(goal * 0.55 / 4);
  }

  else if (bodytype === 'mesomorph'){
    proteiningram = Math.round(goal * 0.3 /4);
    fatingram = Math.round(goal * 0.3 / 9);
    carbsingram = Math.round(goal * 0.4 / 4);
  }

  else if (bodytype === 'endomorph'){
    proteiningram = Math.round(goal * 0.35 /4);
    fatingram = Math.round(goal * 0.4 / 9);
    carbsingram = Math.round(goal * 0.25 / 4);
  }

  this.setState({carbs: carbsingram});
  this.setState({fat : fatingram});
  this.setState({protein : proteiningram});
}



handleResults(){
  this.setState({results: true})
}



async handleSubmit(e){
  e.preventDefault();
  await this.calculateBaseBMR();
  await this.calculateAdjustedBMR();
  await this.calculateGoal();
  await this.calculateMacro();
  await this.handleResults();
  console.log(this.state);
  window.scrollTo({top: 3000, left: 0, behavior: 'smooth'});
}


  render(){

      return(
        <div>
          <div className="container">

              <form onSubmit={this.handleSubmit} className="form" id="calculator">  

              <div >
                <label>
                   Your Body Type
                </label>
                  <div className="row bodytype">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype1">
                      <input type="radio" id="radioEctomorph" name="bodytype" value="ectomorph" onChange={this.handleChange}></input>
                      <label for="radioEctomorph"> 
                      <img src={Ectomorph} alt="ectomorph"></img> 
                      <br/><span>1. ECTOMORPH</span> <p>Lean and long, with difficulty building muscle no matter how much you eat or lift</p>
                      </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype2">
                      <input type="radio" id="radioMesomorph" name="bodytype" value="mesomorph" onChange={this.handleChange}></input>
                      <label for="radioMesomorph"> 
                      <img src={Mesomorph} alt="mesomorph"></img> 
                      <br/><span>2. MESOMORPH</span> <p>Muscular and well-built, with a high metabolism and responsive muscle cells</p>
                      </label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bodytype3">
                      <input type="radio" id="radioEndomorph" name="bodytype" value="endomorph" onChange={this.handleChange}></input>
                      <label for="radioEndomorph"> 
                      <img src={Endomorph} alt="endomorph"></img> 
                      <br/><span>3. ENDOMORPH</span> <p>Big, high body fat, often pear-shaped, with a high tendency to store body fat</p></label> 
                    </div>
                  </div>
              </div> 

              <div>
                <label>
                   Gender
                </label>
                  <div className="row gender">

                    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 genderbutton">
                    <input type="radio" id="radioMale" name="gender" value="male" onClick={this.handleChange}></input>
                    <label for="radioMale" id="male">MALE</label>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 genderbutton">
                    <input type="radio" id="radioFemale" name="gender" value="female" onClick={this.handleChange} ></input>
                    <label for="radioFemale" id="female">FEMALE</label>
                    </div>
                  
                  </div>
      
              </div>

              <div className="age">
                <label>
                   Age
                </label>
                <div>
                  <input type="number" name="age" onChange={this.handleChange} min="1" max= "99" required/>
                </div>
              </div>           

            <div className="row heightnweight">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 weight">
                <label>
                  Weight
                </label>
                <div>
                  <input type="text" name="weight" maxLength="3" onChange={this.handleChange} required/>
                  <span id="unit"> KG </span>
                </div>
              </div>  

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 height">
                <label>
                  Height
                 </label>
              <div>
                  <input type="text" name="height" maxLength="3" onChange={this.handleChange} requried/>
                  <span id="unit"> CM </span>
              </div>
              </div>
            </div>
            
              <div>
                <label>
                   Exercise Level
                </label>
                  <div className="row exerciselevel">
                  
                  <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                  <input type="radio" id="radioSedentary" name="exerciselevel" value="sedentary" onClick={this.handleChange}></input>
                  <label for="radioSedentary">SEDENTARY <p>(NO EXERCISE)</p></label>
                  </span>

                  <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                  <input type="radio" id="radioModerate" name="exerciselevel" value="moderate" onClick={this.handleChange}></input>
                  <label for="radioModerate">MODERATE <p>(1-3 DAYS/ WEEK)</p></label>
                  </span>

                  <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                  <input type="radio" id="radioActive" name="exerciselevel" value="active" onClick={this.handleChange}></input>
                  <label for="radioActive">ACTIVE <p>(3-5 DAYS/ WEEK)</p></label> 
                  </span>

                  <span className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                  <input type="radio" id="radioVeryActive" name="exerciselevel" value="veryactive" onClick={this.handleChange}></input>
                  <label for="radioVeryActive">VERY ACTIVE <p>(6-7 DAYS/ WEEK)</p></label> 
                  </span>

                  </div>
              </div> 

              <div>
                <label>
                   Your Primary Goal
                </label>
                  <div className="row primarygoal">

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <input type="radio" id="radioLose" name="primarygoal" value="loseweight" onClick={this.handleChange}></input>
                  <label for="radioLose">LOSE WEIGHT</label>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <input type="radio" id="radioGain" name="primarygoal" value="gainweight" onClick={this.handleChange}></input>
                  <label for="radioGain">GAIN WEIGHT</label>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <input type="radio" id="radioMaintain" name="primarygoal" value="maintain" onClick={this.handleChange}></input>
                  <label for="radioMaintain">MAINTAIN </label> 
                  </div>
                  
                  </div>
      
              </div>

              <div className= "row">
               <input href="#resultssection" className="submit" type="submit" value="Submit"/>
              </div>
              </form>
          </div>

            <div>
            {this.state.results? 
              (
                <Results 
                goaldata= {this.state.goal}
                proteindata = {this.state.protein}
                carbsdata = {this.state.carbs}
                fatdata = {this.state.fat}/>
              ): (
                null
              )}
            </div>
          </div>

      );
  }
}


//results
const Results = (props) => {
     return(
       <div>
         <div className= "container-fluid mainresults">
          <h2> TARGET DAILY CALORIES: <h3>{props.goaldata} KCAL </h3> </h2>
         </div>

         <div className="row results">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 faicon1">
              <FaBreadSlice className="faiconimg1"/>
                <h1> Carbohydrate </h1>
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
   }



  
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Calculator/>, document.getElementById('calculator'));

