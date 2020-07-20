import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './Results'
import BodyTypes from './BodyTypes'; 
import Gender from './Gender'
import Age from './Age'
import WeightnHeight from './WeightnHeight';
import ExerciseLevel from './ExerciseLevel'
import PrimaryGoal from './PrimaryGoal';

//calculator
export class Calculator extends React.Component{
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
    let bmrresultmale = Math.round.abs(66.4730 + (this.state.weight * 13.7516) + (this.state.height * 5.0033) - (this.state.age * 6.7550));
    let bmrresultfemale = Math.round.abs(655.0955 + (this.state.weight * 9.5634) + (this.state.height * 1.8496) - (this.state.age * 4.6756));
  
    if(gendercal === "male"){
      this.setState({basebmr: bmrresultmale});
    }
  
    else if (gendercal === "female"){
      this.setState({basebmr: bmrresultfemale});
    }
  }
  
  
  
  calculateAdjustedBMR () {
    let exerciselevelcal = this.state.exerciselevel;
    let sedentary = Math.round.abs(this.state.basebmr * 1.2);
    let moderate = Math.round.abs(this.state.basebmr * 1.35);
    let active = Math.round.abs(this.state.basebmr * 1.55);
    let veryactive = Math.round.abs(this.state.basebmr * 1.75);
  
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
    let lose = Math.round.abs(this.state.adjustedbmr - 500);
    let maintain = Math.round.abs(this.state.adjustedbmr);
    let gain = Math.round.abs(this.state.adjustedbmr + 500 );
  
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
      proteiningram = Math.round.abs(goal * 0.25 /4);
      fatingram = Math.round.abs(goal * 0.2 / 9);
      carbsingram = Math.round.abs(goal * 0.55 / 4);
    }
  
    else if (bodytype === 'mesomorph'){
      proteiningram = Math.round.abs(goal * 0.3 /4);
      fatingram = Math.round.abs(goal * 0.3 / 9);
      carbsingram = Math.round.abs(goal * 0.4 / 4);
    }
  
    else if (bodytype === 'endomorph'){
      proteiningram = Math.round.abs(goal * 0.35 /4);
      fatingram = Math.round.abs(goal * 0.4 / 9);
      carbsingram = Math.round.abs(goal * 0.25 / 4);
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
  
                <BodyTypes handleChange = {this.handleChange}/>

                <Gender handleChange = {this.handleChange}/>
  
                <Age handleChange = {this.handleChange}/>

                <WeightnHeight handleChange = {this.handleChange}/>

                <ExerciseLevel handleChange = {this.handleChange}/>

                <PrimaryGoal handleChange = {this.handleChange}/>
  
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
  
export default Calculator;
  
  