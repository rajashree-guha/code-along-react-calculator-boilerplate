import React, { useState } from 'react'
import Button from './Button';
import "../App.css"

const Calculator = () => {
    const [input,setinput] = useState("");
    const [result,setresult] = useState("");
    
    // function to handle all inputs from user
    const handleInput=(value)=>{
        setinput((prev)=>prev+value)
    }
    //function to calculate results
    const calculateResult = ()=>{
        try{
        setresult(eval(input))
        }
        catch{
        setresult("Error")
        }
    }

    //funcction to clear input and results
    const clearInput = ()=>{
        setinput("")
        setresult("")
    }

    // function to delete the last char just like backspace
    const deleteLast=()=>{
        setinput(input.slice(0,-1))
    }
    // array for all the buttons
    const ButtonsArray = ["+","-","7","8","9","/","4","5","6","*","1","2","3",".","0"]
    
    return (
        <div className='calculator'>
            <div className="input">
                <h2>Input</h2>
                <input type="text" placeholder='0' value={input} readOnly/>
                <h2>Result</h2>
                <input type="text" placeholder='0' value={result} readOnly style={{marginBottom:"20px"}}/>
            </div>

            <div className="buttons">
                <button onClick={clearInput}>AC</button>
                <button onClick={deleteLast}>DEL</button>

                {ButtonsArray.map((e)=>{
                return <Button function={handleInput} value={e}/>
                })}

            <button className='equal' onClick={calculateResult} style={{ gridColumn: 'span 3' }}>=</button>

            </div>
        </div>
    )
}

export default Calculator