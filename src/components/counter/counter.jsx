import { useState } from "react"

export const Counter = () => {

    const [value, setValue] = useState(0)

    const increase = () => {
        let newVal
        if(value+1 >5){newVal = 5 }else{newVal = value+1}
        setValue(newVal)}
    const decrease = () => {
        
        let newVal
        if(value-1 <0){newVal = 0 }else{newVal = value-1}
        setValue(newVal)}
    return (
        <>
        <button onClick={decrease}>-</button>
         {value} 
        <button onClick={increase}>+</button>
        </>

    )


}