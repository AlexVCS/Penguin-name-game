import { useState } from 'react';
import './App.css';

function App() {
  const [ nameInput, setNameInput ] = useState('');

  const handleOnChange = (event) => {
    let newName = [...nameInput];
    newName = event.target.value;
    setNameInput(newName);
  }

  // let penguinFirstNames =
  //   {
  //     a: Pecky,
  //     b: Chubbers,
  //     c: Beaky,
  //     d: Fishbreath,
  //     e: Fuzzbutt,
  //     f: Bigbeak,
  //     g: Pebbles,
  //     h: Fishcakes,
  //     i: Tumtums,
  //     j: Shrimpy,
  //     k: Featherface, 
  //     l: Honkers,
  //     m: Blubbers,
  //     n: Squawky,
  //     o: Waddles,
  //     p: Puddles,
  //     q: Squidhead, 
  //     r: Flippers,
  //     s: Fishface,
  //     t: Squeaks,
  //     u: Hoppy,
  //     v: Wobbles,
  //     w: Flappity,
  //     x: Chinstrap,
  //     y: Feathers,
  //     z: Stubby
  //   };
    
    // console.log(penguinFirstNames.a);

  // let penguinMiddleNames = [Mc, Von];
  
  // letters A-M = Mc
  // N-Z = Von

  // let penguinLastNames =
  // [Flapperson, Waddlebottom, Flapdoodle, Hoppington, Beakerson, Squeakybeak, Krillington, Featherbottom, Beady eyes, Roly poly, Bellyflop, Peckington, Pecks-a-lot, Squidbreath, Squaksalot, Fancyflippers, Hopsalot, Flappyfeet, Blubberbuns, Pebblepincher, Wigglefeet, Flapperson, Snowballs, Swimmington, Flipperstein, 'Slip\'n\'Slide'];

  // let alphabet =
  // [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

  const grabCharacters = () => {
    // let firstChars = console.log(nameInput.match(/[A-Z]/g).join(' '))
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
