import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from "./Components/Ref";
import ErrorCondition from "./Components/ErrorCondition";
import ErrorBoundary from "./Components/ErrorBoundary";
import Counter from "./HigherOrderComponents/Counter";




import Hyderabad from "./Components/Hyderabad";
import Message from "./Components/Message";
import Welcome from "./Components/Welcome";
import Aproperties from "./Components/Aproperties";
import Counter from "./Components/Counter";
import Functionclick from "./Components/Functionclick";
import Classclick from "./Components/Classclick";
import Eventbinding from "./Components/Eventbinding";
import ParentComponent from "./Components/ParentComponent";
import ConditionalRendering from "./Components/ConditionalRendering";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import InlineStyle from "./Components/InlineStyle";
import './appStyle.css';
import styles from'./appStyle.module.css';
import Form from "./Components/Form";
import MountLifecycleA from "./Components/MountLifecycleA";
import MountLifecycleB from "./Components/MountLifecycleB";







class App extends Component {
  render() {
    return (
     
    <div className="App" > 
      <h1 className='error'>ERROR</h1>
    <h1 className={styles.sucess}>SUCESS</h1>*/}
    <Counter />
    <Ref />
        {/*<ErrorBoundary> 
      <ErrorCondition name="superman"></ErrorCondition>  
    </ErrorBoundary>*/}
     {/*} <ErrorBoundary>
      <ErrorCondition  name="spiderman"></ErrorCondition>
      </ErrorBoundary>
      {/*<ErrorBoundary>
      <ErrorCondition  name="joker"></ErrorCondition>

      </ErrorBoundary>*/}
      
      
     {/*<MountLifecycleA />
      <MountLifecycleB />
      <Form />
      <InlineStyle />
      <Stylesheet  primary={true}/>            {/*if it is false nothing displayed(using conditional operater)*/}
      {/*<NameList />
          <ConditionalRendering />
        <ParentComponent /> 
         <Counter />
        <Message />
        <Functionclick />
        <Classclick />
        <Eventbinding />
        <Hyderabad />
        <Aproperties name="Ramya" age="25">She is beautiful</Aproperties>
       <Aproperties name="Surya" age="30" />
        <Welcome name="Brother" />*/}
       

      </div>
    
      
       
  
       
       
  
  
       
     );

  }
   
  
}

export default App
