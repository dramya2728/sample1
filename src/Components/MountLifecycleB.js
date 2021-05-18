import React, { Component } from 'react';

class MountLifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('constructor B')
    }
    static getDeriveStateFromProps(props,state) {
        console.log('getDeriveStateFromProps B')
    }
    componentDidMount() {
        console.log('componentDidMount B ')
    }

    
    render() {
        console.log("render B")
        return (
            <div>MountLifecycleB</div>
        );
    }
}

export default MountLifecycleB;