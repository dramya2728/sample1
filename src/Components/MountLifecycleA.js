import React, { Component } from 'react';
import MountLifecycleB from "./MountLifecycleB";


class MountLifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('constructor A')
    }
    static getDeriveStateFromProps(props,state) {
        console.log('getDeriveStateFromProps A')
        return null
    }
    componentDidMount() {
        console.log('componentDidMount A ')
    }

    
    render() {
        console.log("render A")
        return (
            <div>
                <div> MountLifecycleA </div>
            <MountLifecycleB />

            </div>
            
        );
    }
}

export default MountLifecycleA;