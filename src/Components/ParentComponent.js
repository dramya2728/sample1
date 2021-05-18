import React, { Component } from "react";
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent:"parent How Are You"
        }
        this.greetParent=this.greetParent.bind(this)

    }
    greetParent(childName)   {
        alert(`Hello ${this.state.parent} im your ${childName}`)

    }
    

    


    render() {
        return (
            <div>
                <ChildComponent  greetHandler={this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent