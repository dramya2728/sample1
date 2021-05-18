import React from "react";
const UpdatedComponent=Originalcomponent => {
    
    class NewComponent extends React.Component {
        render() {
            return (
                <div>
                  <Originalcomponent name="ramyachow"/>  
                </div>
            );
        }
    }
    return NewComponent
}
    export default UpdatedComponent;
