// import { useState } from 'react';
import './App.css';

function App() {
  // const [ nameInput, setNameInput ] = useState('');

  // const handleOnChange = (event, index) => {
  //   const newName = [...nameInput];
  //   newName[index] = event.target.value;
  //   setNameInput(newName);
  // }

  // let penguinFirstNames =
  // [Pecky, Chubbers, Beaky, Fishbreath, Fuzzbutt, Bigbeak, Pebbles, Fishcakes, Tumtums, Shrimpy, Featherface, Honkers, Blubbers, Squawky, Waddles, Puddles, Squidhead, Flippers, Fishface, Squeaks, Hoppy, Wobbles, Flappity, Chinstrap, Feathers, Stubby];

  // let penguinMiddleNames = [Mc, Von];

  // let penguinLastNames =
  // [Flapperson, Waddlebottom, Flapdoodle, Hoppington, Beakerson, Squeakybeak, Krillington, Featherbottom, Beady eyes, Roly poly, Bellyflop, Peckington, Pecks-a-lot, Squidbreath, Squaksalot, Fancyflippers, Hopsalot, Flappyfeet, Blubberbuns, Pebblepincher, Wigglefeet, Flapperson, Snowballs, Swimmington, Flipperstein, 'Slip\'n\'Slide'];

  // let alphabet =
  // [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

  return (
    <div className="app">
      <div className="name-question">
        What's your first & last name?
      </div>
      <input
        // onChange={(event) => { return handleOnChange(event)}}
        placeholder="Type your name"
        className="name-input"
      />
      <div className="submit-name-button">
        Click & see your penguin name
      </div>
      {/* <div className="resulting-penguin-name">
        Your penguin name 🐧:
      </div> */}
    </div>
  );
}

export default App;
