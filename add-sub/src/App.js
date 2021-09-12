import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, DECNumber} from './redux/action/action'

function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <h2 className="Heading">Hooks Increment And Decrement Fun</h2>
      <h3 className="Heading">Using React Redux</h3>
      <div className="App-header">
      <button className='style'onClick={ () => dispatch(DECNumber())}>-</button>
      <button className='style'>{myState}</button>
      <button className='style'onClick={ () => dispatch(incNumber())}>+</button>
      </div>
    </>
  );
}

export default App;
