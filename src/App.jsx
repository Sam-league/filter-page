import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addByValue, addCount,subCount} from './Slices/CounterSlice';
import Layout from './components/Layout';

function App() {
  const [value,setValue]= useState(0);
  const count = useSelector(state=>state.counter.count);
  const dispatch  = useDispatch();
  const add = () => {
    dispatch(addCount());
  }
  const minus = () => {
    dispatch(subCount());
  }
  const handleAdd = ()=>{
    dispatch(addByValue(value));
  }
  return (
    <>
    <Layout/>
    </>
  )
}

export default App
