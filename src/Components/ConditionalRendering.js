import React, { Component } from 'react';

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loggedin:true

        }
        
    }
   
    
    render() {
        return this.state.loggedin && <div>Ramya logged</div>    // short circute operator  
        //return (
            //this.state.loggedin ? (                       //using Ternary conditional operator
               // <div>Ramya logged</div>):(
              //      <div>loggin error</div>)
           // );

        
        //let message                             //using element varible
       // if(this.state.loggedin)
       // message=<div>Ramya logged</div>
       // else
       // message=<div>loggin error</div>
        
       // return <div>{message}</div>



        //if(this.state.loggedin)             //using if else
        //return <div> Ramya logged</div>
        //else {
       // return <div>loggin error</div>
    }
        
}

