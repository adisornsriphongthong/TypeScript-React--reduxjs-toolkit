import React, { useState } from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './state/counterSlide/counterSlide';
import { RootState } from './state/store';
import './App.css';
import { setText } from './state/counterSlide/changeText';

function App() {
  const [data ,setData] = useState<string>('')
  const dispath = useDispatch()
  const counterValue = useSelector((state: RootState) => state.counter.value)
  const changeText = useSelector((state: RootState) => state.changeText.value)
  return (
    <>
    {counterValue}
    <button onClick={() => {
      dispath(increment())
    }}>
      increment
    </button>

    {changeText}
    <button onClick={() => {
      dispath(setText('hello girl'))
    }}>changeText</button>
    </>
  );
}

export default App;
