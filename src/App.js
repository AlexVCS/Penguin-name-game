import { useState } from 'react';
import './App.css';

function App() {
  const [ nameInput, setNameInput ] = useState('');
  // const [ penguinFirstName, setPenguinFirstName ] = useState('');
  // const [ penguinMiddleName, setPenguinMiddleName ] = useState('');
  // const [ penguinLastName, setPenguinLastName ] = useState('');

  const handleOnChange = (event) => {
    setNameInput(event.target.value);
  }

  const penguinFirstNameList =
    {
      a: 'Pecky',
      b: 'Chubbers',
      c: 'Beaky',
      d: 'Fishbreath',
      e: 'Fuzzbutt',
      f: 'Bigbeak',
      g: 'Pebbles',
      h: 'Fishcakes',
      i: 'Tumtums',
      j: 'Shrimpy',
      k: 'Featherface', 
      l: 'Honkers',
      m: 'Blubbers',
      n: 'Squawky',
      o: 'Waddles',
      p: 'Puddles',
      q: 'Squidhead', 
      r: 'Flippers',
      s: 'Fishface',
      t: 'Squeaks',
      u: 'Hoppy',
      v: 'Wobbles',
      w: 'Flappity',
      x: 'Chinstrap',
      y: 'Feathers',
      z: 'Stubby'
    };

  const penguinLastNameList =
    {
      a: 'Flapperson',
      b: 'Waddlebottom',
      c: 'Flapdoodle',
      d: 'Hoppington',
      e: 'Beakerson',
      f: 'Squeakybeak',
      g: 'Krillington',
      h: 'Featherbottom',
      i: 'Beady eyes',
      j: 'Roly poly',
      k: 'Bellyflop',
      l: 'Peckington',
      m: 'Pecks-a-lot',
      n: 'Squidbreath',
      o: 'Squaksalot',
      p: 'Fancyflippers',
      q: 'Hopsalot',
      r: 'Flappyfeet',
      s: 'Blubberbuns',
      t: 'Pebblepincher',
      u: 'Wigglefeet',
      v: 'Flapperson',
      w: 'Snowballs',
      x: 'Swimmington',
      y: 'Flipperstein',
      z: 'Slip\'n\'Slide'
    };

  // let penguinMiddleNames = [Mc, Von];
  
  // letters A-M = Mc
  // N-Z = Von

    const handleUserName = (event) => {
      const name = nameInput.toLowerCase();
      const getInitials = name.split(' ').reduce((response, word) => response + word.slice(0, 1), '');
      console.log(getInitials);
      const secondInitial = getInitials[1];
      console.log(secondInitial);
    }

    const onKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        handleUserName();   
      }
    }

  return (
    <div className="app">
      <div className="name-question">
        What's your first & last name?
      </div>
      <input
        onChange={handleOnChange}
        value={nameInput}
        onKeyDown={onKeyDown}
        placeholder="Type your name"
        type="text"
        className="name-input"
      />
      <div
        onClick={handleUserName}
        className="submit-name-button"
        type="submit"
      >
        Click & see your penguin name 🐧
      </div>
      {/* <div className="penguin-name">
        
      </div> */}
    </div>
  );
}

export default App;