import React, { useState } from "react";
import './QrCrossWord.css'
import {
  Link
} from "react-router-dom";
import BOTW from '../BOTW.jpg';
import Crossword from '@jaredreisinger/react-crossword';
import Header from '../components/header/header'

import { ThemeProvider } from '@material-ui/styles';

import { send } from 'emailjs-com';


import { 
  Container,
  Row,
  Col,
  Button,
  Modal
} from 'react-bootstrap'


const data = {
  across: {
    1: {
      clue: 'Park where they had the reunion concert',
      answer: 'CENTRAL',
      row: 4,
      col: 0,
    },
    3: {
      clue: 'The kind of water used to cook spaghetti',
      answer: 'TROUBLED',
      row: 2,
      col: 4,
    },
    6: {
      clue: 'Pocket filler',
      answer: 'MUMBLES',
      row: 0,
      col: 4,
    }
  },
  down: {
    2: {
      clue: 'What are snail jealous of',
      answer: 'SPARROWS',
      row: 3,
      col: 8,
    },
    4: {
      clue: 'Confidence shaker',
      answer: 'CELIA',
      row: 6,
      col: 6,
    },
    5: {
      clue: 'How a customer feels when Tesco are all out of Dr Pepper Zero',
      answer: 'UNSATISFIED',
      row: 0,
      col: 3,
    }
  },
};



const QrCrossWord = () => {
  const [win, setWin] = useState(false);
  const [show, setShow] = useState(false);
  // let winState = false;
  const [toName, setToName] = useState('')
  const [emailSuccess, setEmailSuccess] = useState(false);

  let crossWordRef = React.createRef();
  let bam = () => console.log(crossWordRef.isCrosswordCorrect());
  
  const success = () => {
    !win && setShow(true);
    console.log(win);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    {/* --- METHOD TO SEND THE MAIL --- */}
    let toSend = {
      first_name: 'Ste',
      email: toName,
      message: 'it works'
    }
    send(
      'service_a36onn9',
      'template_6xyapsm',
      toSend,
      'G99qlWmkf22hk1jWx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToName(e.target.value);
  };

  Crossword.defaultProps  = {
    theme: {
      highlightBackground: 'red',
      focusBackground: 'cyan'
    }
  }

  const theme = {
    textColor: 'red',
    focusBackground: 'red'
  };

  return (
    <div style={{backgroundColor: '#0500b0'}}>
      <Header />

      <Modal
              show={show}
              onShow={() => setWin(true)}
              onHide={() => setShow(false)}   
            >
              <Modal.Body> 
                <p>
                  You won!!!

                  <br/><br/>

                  To sumbit your entry, please enter your email below:
                </p>
                <input
                    type='text'
                    name='to_name'
                    placeholder='email here please'
                    value={toName}
                    onChange={handleChange}
                ></input>
                <Button onClick={onSubmit}>Submit</Button>
                {emailSuccess && <p>Ta</p>}
              </Modal.Body>
            </Modal>
            
      <Container>
        <Row>
          <Col>
            <br/>
            <h2 style={{color: 'white', textAlign: 'center'}}>2022 Mother's Day competition</h2>
            <Button onClick={() => console.log(crossWordRef.current.isCrosswordCorrect())}>Correct?</Button>
            <Button onClick={() => console.log(crossWordRef.current.fillAllAnswers())}>Correct!</Button>
            <Button onClick={() => console.log(crossWordRef.current.reset())}>Reset</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={BOTW} className="s-n-g-pic" alt="logo" />
            <br/><br/>
            <p style={{color: 'white'}}>
              Successfully solve the crossword in order to submit your entry
            </p>
          </Col>
          <Col>          
            <div style={{width: "60%", paddingTop: '4%', paddingLeft: '4%'}}>
              <ThemeProvider theme={theme}>
                <Crossword ref={crossWordRef} onCrosswordCorrect={() => success()} data={data} />
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
