import React from 'react'
import './myStyles.css'

//export default function Stylesheet() {                      //add color
   // return (
   //     <div className="primary">Styling color</div>
   // );
//}
export default function Stylesheet(props) {                   //using props to add color and font
    const className=props.primary? 'primary':''
    return (
        <div className={`${className} font-xl`}>Styling color</div>
    );
}