import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {

  const [displayValue, setDisplayValue] = useState('0');

  const handleOnClick = (buttonName) => {
    console.log(event);
    
    const buttonValue = buttonName
    if (buttonValue === 'c') {
      setDisplayValue('0');
    } 
    else if (buttonValue === '=') {
      setDisplayValue(eval(displayValue));
    }
    else {
      if (displayValue === '0') {
        setDisplayValue(buttonValue);
      } else {
        setDisplayValue(displayValue + buttonValue);
      }
    }
  }

  return (
    <div className = {styles.calculator}>

      <Display displayValue={displayValue}/>
      <ButtonContainer handleOnClick={(buttonName) => handleOnClick(buttonName)}/>

    </div>
  )
}

export default App
