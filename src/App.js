import "./App.css";
import React from "react"

function Welcome(props) {
  return (
    <div>
      <h1>Welcome {props.name} </h1>
      <h1>You are {props.age} </h1>
      <h1>Your gender is {props.gender} </h1>
    </div>
  );
}

function MyButton (props) {
  return <button>{props.content}</button>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Andrew" age="28" gender="male"/>
        
      </div>
    );
  }
}

export default App;
