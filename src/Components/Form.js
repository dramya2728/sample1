import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            comments:'',
            topic:''
             
        }
    }
    handlerusernameChange=(event) => this.setState({username:event.target.value})
    handlercommentsChange=(event) =>this.setState({comments:event.target.value})
    handlertopicChange=(event) => this.setState({topic:event.target.value})
    handlersubmit=(event)=>{ 
        alert(`${this.state.usernameusername} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    
    render() {
        const {username,comments,topic} = this.state
        return (
            <form onSubmit={this.handlersubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type="text"  
                    value={username} 
                    onChange={this.handlerusernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handlercommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handlertopicChange}>
                    < option value= "react">React</ option>
                    <option value="angular">ANGULAR</option>
                    <option value="html">HTML</option>                      
                    
                    </select>
                        
                </div>
                <button type="submit">Submit</button>

            </form>
                
       );

            
            
    }
}

export default Form;