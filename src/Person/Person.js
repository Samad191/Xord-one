import React,{useEffect} from 'react';

import {sendEther,sendToken} from './Person2'
import './style.css'



function Person(props) {
      useEffect(()=>{

      },[])
    return (
    <div>
        
        <h1>Donate!</h1>

        <input  type="number" />
        <br/>
        <br/>

    <button onClick={() => sendToken() }  style={{backgroundColor: "blue" ,color :"white" ,margin:"10px"}} > Donate Token  </button>        
    <button onClick={() => sendEther() }  style={{backgroundColor: "grey" ,color :"white" ,margin:"10px"}} >  Donate Ether </button>
    
    
    </div>

)
}

export default Person;