import React, { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';


class App extends Component {
  //5
  state = {
    userName: 'Teddy Bear'
  }

  //6
  inputChagedHandler = (event) => {
    this.setState({ userName: event.target.value })

  }
  render() {


    return (
      <div className="App" >
        <ol>
          <li>Create TWO new components: Userinput and UserOutput</li>
          <li>Userlnput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (an event-handler method)</li>
          <li>Pass the event-handler method reference the Userinput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in User input) to also display the starting username</li>
          <li>Add styling of your choice to your components/elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput
          changed={this.inputChagedHandler}
          currentName={this.state.userName} />
        <UserOutput userName="Nataly" />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Tiger Cub" />
      </div>
    )
  };
}

export default App;
