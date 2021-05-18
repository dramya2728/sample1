import React, { Component } from 'react';

class Eventbinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"name"
        }
        this.ClickHandler=this.ClickHandler.bind(this)  //3rd approch:binding class constructor
    }
    //ClickHandler() {                   1,2,3 approches -classproperty
       // this.setState({
           // message:"RAMYA"
       //})
      // console.log(this)
    //}
    ClickHandler=() => {               //4th approch:classproperty as arrow function
        this.setState({
            message:"RAMYA"
        })
    }
    
    render() {
        return (
            <div>
               <div>{this.state.message}</div> 
              {/*<button onClick={this.ClickHandler.bind(this)}>ADD</button>   1st o/p */}  
              {/*<button onClick={() => this.ClickHandler()}>ADD</button>         2nd o/p*/}
              {/*<button onClick={this.ClickHandler}>ADD</button>                  3rd o/p*/}
              <button onClick={this.ClickHandler}>ADD</button>                {/*4th o/p*/} 



            </div>
        );
    }
}

export default Eventbinding;