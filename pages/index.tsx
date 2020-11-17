import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {countDecrement, countDynamicNumber, countIncrement} from '../redux/actions/countAction'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

export default function Home() {
  // const [count, setCount] = useState(0)
  
  // const increment = () =>{
  //   setCounter(itemt => itemt+1)
  // }
  const counter = useSelector((state:any) => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      Value: {counter} 
      <button onClick={()=>dispatch(countIncrement())}>increment</button>
      <button onClick={()=>dispatch(countDecrement())}>decrement</button>
      <button onClick={()=>dispatch(countDynamicNumber(5))}>DynamicNumber</button>
    </div>  
  )
}
