import React from "react";
import {
  Link
} from "react-router-dom";
import Crossword from '@jaredreisinger/react-crossword';
import Header from '../components/header/header'


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



const QrCrossWord = () => {
  let winState = false;
  
  const success = () => {
    winState = true;
  }

  return (
    <div style={{backgroundColor: '#0500b0'}}>
      <Header />



      <div style={{width: "30%", paddingTop: '4%', paddingLeft: '4%'}}>
        <Crossword onCrosswordCorrect={() => console.log('winner')} data={data} />
      </div>

      {winState && <p>We have a winner</p>}
      Hello
    </div>
  );
}

export default QrCrossWord;
