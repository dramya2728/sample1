import React from 'react'

export default function Functionclick() {
    function ClickHandler(){
        console.log("button clicked")
    }
    return (
        <div>
            <button onClick={ClickHandler}>click</button>
            
        </div>
    )
}
