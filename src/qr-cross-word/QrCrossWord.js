import React from "react";
import './QrCrossWord.css'
import {
  Link
} from "react-router-dom";
import BOTW from '../BOTW.jpg';
import Crossword from '@jaredreisinger/react-crossword';
import Header from '../components/header/header'

import { ThemeProvider } from '@material-ui/styles';

import { 
  Container,
  Row,
  Col
} from 'react-bootstrap'


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

  let crossWordRef = React.createRef();
  
  const success = () => {
    winState = true;
  }

  Crossword.defaultProps  = {
    theme: {
      // textColor: 'white'
    }
  }

  const theme = {
    // textColor: 'rgb(255, 255, 255)',
    // gridBackground: 'red'
  };

  return (
    <div style={{backgroundColor: '#0500b0'}}>
      <Header />

      <Container>
        <Row>
          <Col>
            <br/>
            <h2 style={{color: 'white', textAlign: 'center'}}>2022 Mother's Day competition</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={BOTW} className="header-logo" alt="logo" />
          </Col>
          <Col>          
            <div style={{width: "30%", paddingTop: '4%', paddingLeft: '4%'}}>
              <ThemeProvider theme={theme}>
                <Crossword ref ={crossWordRef} onCrosswordCorrect={() => console.log('winner')} data={data} />
              </ThemeProvider>
            </div>


          </Col>
        </Row>
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </div>
  );
}

export default QrCrossWord;
