import React, { Children } from "react";

export default function Aproperties(props) {
    console.log(props);

    return (
        <div>
        <h1>{props.name} age is {props.age}</h1>
        {props.children}
        

        </div>

    );
}