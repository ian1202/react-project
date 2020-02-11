import React from 'react';
import Header from './Header';
import Introduction from './Introduction'
import Calculator from './Calculator'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Calculator/>
      <Footer/>
    </div>
  );
}

export default App;
