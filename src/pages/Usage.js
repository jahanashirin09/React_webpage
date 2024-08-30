import React,{useEffect, useState} from 'react'
import './Usage.css'

function Usage() {

    const[value,setValue]=useState(0);
    const[color,setColor]=useState('white');
   

    useEffect(()=>{
        console.log('inside use effect'+value);
        return()=>{
            console.log('clean up'+value);
        }
    },[value])


  return (
   
        <div className='main-container' style={{background:color}}>
             <div className='usage-item'>
            <button onClick={()=>{
            setValue((state)=>{
                return state+1
            })
            }}>Increment</button>
            <label>{value}</label>
            <button onClick={()=>{
            setValue(value-1)
            }}>Decrement</button>
            <button onClick={()=>{
            setColor('green');
            }}>Green</button>
            <button onClick={()=>{
            setColor('blue')
            }}>Blue</button>
            </div>
        </div>
  )
}

export default Usage