import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             haserror:false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            haserror:true
        }

    }
    componentDidCatch(info,error){
        console.log("info")
        console.log("error")
    }
    render() {
        if(this.state.haserror){
            return <h1>Something went wrong</h1>
           }
           return this.props.children
        
    }
}

export default ErrorBoundary;