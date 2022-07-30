import React from 'react';
import { useEffect, useState, useContext } from 'react';
import './App.css';

function Update() {

  let [info, setInfo] = useState({
    age: 20,
    sibling: 2,
  }
  )

  let changeAge = () => {
    setInfo(prev => {
      return { ...prev, age: prev.age + 1 }
    })
  }

  let changeSib = () => {
    setInfo(prev => {
      return {
        ...prev, sibling: prev.sibling + 1
      }
    }
    )
  }

  let [count, setCount] = useState(0)

  let reset = () => {
    setCount(0)
  }

  let increment = () => {
    setCount(count + 1)
  }

  let decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    document.title = "You are " + info.age + " years old."
  })

  const ThemeContext = React.createContext('dark')
  
  let display = () => {
    const theme = 'dark';
//     const theme = useContext(ThemeContext)
    return <div style ={{
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'dark',
            width: '100%',
            minHeight: '195px'
    }}>
      <h2>The theme here is {theme}.</h2>
  </div>
  }

  return <><center><br></br>
    <h2>Today I am {info.age} years old.</h2>
    <h2>I have {info.sibling} siblings.</h2>

    <span>
      <button className='btnGet' onClick={changeAge}>Get older!</button> &emsp;
      <button className='btnGet' onClick={changeSib}>More Siblings!</button>
    </span>
    <br /><br />

    <h2>Count value is: {count}</h2>
    <span>
      <button className='btnGet' onClick={reset}>Reset</button>&emsp;
      <button className='btnGet' onClick={increment}>Increase</button>&emsp;
      <button className='btnGet' onClick={decrement}>Decrease</button>
    </span>
    <br /><br />
    <h2>Change Title!!</h2>
    <button className='btnGet' onClick={useEffect}>Change Title</button>
    <br /><br /><br /><br />
    {display()}</center>
  </>
}

export {Update}