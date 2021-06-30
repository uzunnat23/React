import React from 'react';

import Person from './Person/Person'

const persons = (props) => {
    console.log('[Persons.js] renderind...');
    return props.persons.map((person, index) => {
        return (<Person
            click={() => props.clickted(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)} />
        );
    });
};
export default persons;