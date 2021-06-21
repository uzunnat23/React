import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Nataly', age: 22 },
      { name: 'Andrew', age: 23 },
      { name: 'Anatolii', age: 21 }
    ] 
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS: personsState.persons[0].name = 'Natalia';

    //This is a method which allows us to update this special 
    //state property here and it will then ensure that 
    //React gets to know about this update and updates the DOM.
    setPersonsState({
      persons: [
        { name: 'Natalia', age: 22 },
        { name: 'Andrew', age: 23 },
        { name: 'Anatolii', age: 24 }
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <p>There was a tiger cub!</p>
    </div>
  );

}

export default app;


