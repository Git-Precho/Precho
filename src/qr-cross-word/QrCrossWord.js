import React from "react";
import {
  Link
} from "react-router-dom";
import Crossword from '@jaredreisinger/react-crossword';


const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
  },
};

let winState = false;

const success = () => {
  winState = true;
}

function QrCrossWord() {
  return (
    <React.Fragment>
      Cross word right here

      
      <li>
        <Link to="/">Home</Link>
      </li>

    <div style={{width: "30%"}}>
      <Crossword onCrosswordCorrect={() => console.log('winner')} data={data} />
      </div>

      <p>{winState && 'We have a winner'}</p>
    </React.Fragment>
  );
}

export default QrCrossWord;
