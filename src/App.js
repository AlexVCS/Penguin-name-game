import { useState } from 'react';
import './App.css';

function App() {
  const [ nameInput, setNameInput ] = useState('');

  const handleOnChange = (event) => {
    let newName = [...nameInput];
    newName = event.target.value;
    setNameInput(newName);
  }

  let penguinFirstNames =
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
    
    // console.log(penguinFirstNames.a);

  // let penguinMiddleNames = [Mc, Von];
  
  // letters A-M = Mc
  // N-Z = Von

  let penguinLastNames =
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

  const grabCharacters = () => {
    let firstChars = console.log(nameInput.match(/[A-Z]/g).join(' '))
  }

  return (
    <div className="app">
      <div className="name-question">
        What's your first & last name?
      </div>
      <input
        onChange={(event) => { return handleOnChange(event)}}
        placeholder="Type your name"
        value={nameInput}
        className="name-input"
      />
      <div onClick={grabCharacters} className="submit-name-button">
        Click & see your penguin name 🐧
      </div>
      {/* <div className="resulting-penguin-name">
        Your penguin name 🐧:
      </div> */}
    </div>
  );
}

export default App;
