import React from 'react';
import './App.css';
import { Greeting } from './Components/Greeting';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { EventClick } from './Components/EventClick';
import { InputEvents } from './Components/InputEvents';
import StylesContainer from './Components/StylesContainer';
import { LoggedIn } from './Components/LoggedIn';
import { User } from './Components/User';
import { ReducerHook } from './ReducerHook';
import { IUser, UserClass } from './Components/UserClass';

function App() {
  const [isHovered, setIsHovered] = React.useState(false)

  const personName = {
    first: 'Jason',
    last: 'Morta'
  }

  const nameList = [
    {
      first: 'Jason',
      last: 'Fu'
    },
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Jane',
      last: 'Doe'
    }
  ]

    // Create an instance of the User class
    const userInstance = new UserClass(1, nameList[0].first, 'john.doe@example.com', 30);

    // Get user details
  const userDetails: IUser = userInstance.getUserDetails();

  // Greet the user
  const greeting = userInstance.greetUser(userDetails.name);

  return (
    <div className="App">
      <Heading>Main Heading</Heading>
      <p style={{color: 'pink'}}>{greeting}</p>
      <Oscar>
        <Heading>The Oscar goes to MEE</Heading>
      </Oscar>
      <Greeting
        name={'Jason'}
        //messageCount={15}
        isLoggedIn={true}
      />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error' />

      <EventClick handleClick={(event, id) => {
        console.log('id', id)
        console.log('Button clicked')
        console.log(event.target)
      }} />

      <InputEvents
        handleInput={(event) => {
          console.log(event.target.value)
        }}
        value='Hello World'
      />
      <StylesContainer 
        styles={{
            border: '2px solid red',
            padding: '10px',
            margin: '10px',
            backgroundColor: isHovered ? 'lightgray' : 'transparent',
            transition: '0.3s',
            cursor: 'pointer'
          }} 
          mouseHoverEnter={() => {
            setIsHovered(true)
          }}
          mouseHoverLeave={() => {
            setIsHovered(false)
          }}
          />
          <LoggedIn />
          <User />
          <ReducerHook />
    </div>
  );
}

export default App;
