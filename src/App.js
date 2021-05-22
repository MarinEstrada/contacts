import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
    render(){
        const people = this.props.contacts

        return <ol>
            {people.map(person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

function App() {
  return (
    <div className="App">
        <ContactList contacts={[
            { name: 'Tyler'},
            { name: 'Beckie'},
            { name: 'Juanita'},
        ]}/>
        <ContactList contacts={[
            { name: 'Mirian'},
            { name: 'Saul'},
            { name: 'Samir'},
            { name: 'Nikkita'},
        ]}/>
    </div>
  );
}

export default App;
