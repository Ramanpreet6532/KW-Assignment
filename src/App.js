import './App.css';
import { useState } from 'react';
import Keypad from './components/keypad';

function App() {
  const [state, setState] = useState({
    input: 0,
    operator: '',
    opr1: 0,
    opr2: 0,
    scientificMode: false,
  });

  const [darkMode, setDarkMode] = useState(false);
  // const { input, operator, opr1, opr2, scientificMode } = state;

  const handleClick = val => {
    console.log({ val });
    setState({
      ...state,
      input: val
    });
    if (!state.operator) {
      if (state.input == 0) {
        setState({
          ...state,
          input: val
        });
      }
      else {
        setState({
          ...state,
          input: state.input + val
        });
      }
    }

  }

  const add = () => {
    setState({
      ...state,
      opr1: state.input,
      scientificMode: state.scientificMode
    });
    console.log(state.opr1, 'opr1');
    console.log("input-----", state.input);

    if (state.operator == "plus") {
      setState({
        input: parseInt(state.opr1) + parseInt(state.input),
        scientificMode: state.scientificMode
      })
    }
    else {
      setState(state => ({
        ...state,
        input: state.opr1,
        operator: "plus",
        scientificMode: state.scientificMode,
      }));
    }
  };

  const subtract = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    if (state.operator == "subtract") {
      setState({
        input: parseInt(state.opr1) - parseInt(state.input)
      })
    }
    else {
      setState(state => ({
        ...state,
        input: state.opr1,
        operator: "subtract"
      }))
    }
  };

  const divide = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    if (state.operator == "divide") {
      setState({
        input: parseInt(state.opr1) / parseInt(state.input)
      })
    }
    else {
      setState(state => ({
        ...state,
        input: state.opr1,
        operator: "divide"
      }))
    }
  };

  const multiply = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    if (state.operator == "multiply") {
      setState({
        input: parseInt(state.opr1) * parseInt(state.input)
      })
    }
    else {
      setState(state => ({
        ...state,
        input: state.opr1,
        operator: "multiply"
      }))
    }
  };

  const clear = () => {
    setState({ input: '', scientificMode: state.scientificMode })
  }

  const square = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    setState(state => ({
      ...state,
      operator: "square"
    }))
  }

  const squareRoot = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    setState(state => ({
      ...state,
      operator: "squareroot"
    }))
  }

  const sign = () => {
    setState({
      ...state,
      opr1: state.input
    });
    console.log(state.opr1, 'opr1');

    setState(state => ({
      ...state,
      operator: "sign",
      input: -parseInt(state.opr1)
    }));
  }

  const result = () => {

    state.opr2 = state.input;
    console.log(state.opr2, 'opr2');
    console.log(state.operator, "operator");

    if (state.operator == "plus") {
      setState({ input: parseInt(state.opr1) + parseInt(state.opr2), scientificMode: state.scientificMode });
    }
    else if (state.operator == "subtract") {
      setState({ input: parseInt(state.opr1) - parseInt(state.opr2), scientificMode: state.scientificMode });
    }
    else if (state.operator == "divide") {
      setState({ input: parseInt(state.opr1) / parseInt(state.opr2), scientificMode: state.scientificMode });
    }
    else if (state.operator == "multiply") {
      setState({ input: parseInt(state.opr1) * parseInt(state.opr2), scientificMode: state.scientificMode });
    }
    else if (state.operator == "square") {
      setState({ input: parseInt(state.opr1) * parseInt(state.opr1), scientificMode: state.scientificMode });
    }
    else if (state.operator == "squareroot") {
      setState({ input: Math.sqrt(parseInt(state.opr1)), scientificMode: state.scientificMode });
    }
    else if (state.operator == "sign") {
      setState({ input: -parseInt(state.opr1), scientificMode: state.scientificMode });
    }
  }

  return (
    <div className={darkMode ? "app-dark" : "app"}>

      <div className={darkMode ? "mode-button-dark" : "mode-button"}>
        <div>
          <button onClick={() => setState({ scientificMode: !state.scientificMode, input: 0 })}>Scientific Mode</button>
        </div>
        <div className="theme-button">
          <button onClick={() => setDarkMode(false)}>Light Theme</button>
          <button onClick={() => setDarkMode(true)}>Dark Theme</button>
        </div>
      </div>
      <div className="app-row">
        <div className={darkMode ? "input-dark" : "input"}>{state.input}</div>

        <div className={darkMode ? "keypad-row-dark" : "keypad-row"}>
          <Keypad onClick={handleClick}>1</Keypad>
          <Keypad onClick={handleClick}>2</Keypad>
          <Keypad onClick={handleClick}>3</Keypad>
          <Keypad onClick={add}>Add (+)</Keypad>
        </div>

        <div className={darkMode ? "keypad-row-dark" : "keypad-row"}>
          <Keypad onClick={handleClick}>4</Keypad>
          <Keypad onClick={handleClick}>5</Keypad>
          <Keypad onClick={handleClick}>6</Keypad>
          <Keypad onClick={subtract}>Subtract (-)</Keypad>
        </div>

        <div className={darkMode ? "keypad-row-dark" : "keypad-row"}>
          <Keypad onClick={handleClick}>7</Keypad>
          <Keypad onClick={handleClick}>8</Keypad>
          <Keypad onClick={handleClick}>9</Keypad>
          <Keypad onClick={multiply}>Multiply (*)</Keypad>
        </div>

        <div className={darkMode ? "keypad-row-dark" : "keypad-row"}>
          <Keypad onClick={clear}>Clear</Keypad>
          <Keypad onClick={handleClick}>0</Keypad>
          <Keypad onClick={result}>=</Keypad>
          <Keypad onClick={divide}>Divide (/)</Keypad>
        </div>

        {state.scientificMode ? (
          <div className={darkMode ? "keypad-row-dark" : "keypad-row"}>
            <Keypad onClick={square}>Square</Keypad>
            <Keypad onClick={squareRoot}>Squareroot</Keypad>
            <Keypad onClick={sign}>Sign (+/-)</Keypad>
          </div>
        ) : ''}

      </div>
    </div>
  );
}

export default App;