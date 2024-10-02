import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  
  return (
    <div>
      <Header setIsDropDownOpen={setIsDropDownOpen}/>
      <Main isDropdownOpen={isDropdownOpen}/>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
