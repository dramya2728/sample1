import React, { Component } from 'react';

class Classclick extends Component {
     ClickHandler() {
        console.log("file updated")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Update</button>
                
            </div>
        );
    }
}

export default Classclick;