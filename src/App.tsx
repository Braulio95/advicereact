import React, { useEffect, useState } from 'react';
import './App.css';
import { AdviceComponent } from './AdviceComponent';

function App() {
  const [advice, setAdvice] = useState('');

  const getRandomNumber = (maxRGBValue:number):number => {                 //The next two functions are done to generate a random RGB color
    return Math.floor(Math.random() * maxRGBValue);
  }

  const getRandomColor = ():string => {
    const r = getRandomNumber(255);
    const g = getRandomNumber(255);
    const b = getRandomNumber(255);
    return `rgb(${r}, ${g}, ${b})`;
  }; 

  const changeAdvice = () =>{
      const advices = fetch("https://api.adviceslip.com/advice"); //Petition to the API is done
      advices.then(res => res.json())
      .then(response => {
          let quote = `"${response.slip.advice}"`; //We access to the advice located in the JSON
          setAdvice(quote);
      })
  }

  useEffect(()=>{
      changeAdvice();
      // console.log('Page first loading');
  },[])

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: getRandomColor()}}>
        <AdviceComponent advice = { advice } function = {changeAdvice}/>
      </header>
    </div>
  );
}

export default App;
