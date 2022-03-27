import React, { useEffect, useState } from "react";
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
  Modal,
  Spinner
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
      row: 10,
      col: 8,
    },
    6: {
      clue: 'Poor pronunciation pocket filler',
      answer: 'MUMBLES',
      row: 0,
      col: 2,
    },
    7: {
      clue: 'When toddlers scoot down the kitchen in their toy car, they call them what kind of driver',
      answer: 'BABY',
      row: 6,
      col: 5,
    }
  },
  down: {
    2: {
      clue: 'What are snails jealous of',
      answer: 'SPARROWS',
      row: 5,
      col: 10,
    },
    4: {
      clue: 'Confidence shaker',
      answer: 'CELIA',
      row: 2,
      col: 6,
    },
    5: {
      clue: 'How a customer feels when Tesco are all out of Dr Pepper Zero',
      answer: 'UNSATISFIED',
      row: 0,
      col: 3,
    },
    8: {
      clue: 'Who gets their plane right on time',
      answer: 'TOM',
      row: 10,
      col: 8,
    }
  },
};



const QrCrossWord = () => {
  const [win, setWin] = useState(false);
  const [show, setShow] = useState(false);
  // let winState = false;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')

  const [emailSuccess, setEmailSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  let crossWordRef = React.createRef();

  useEffect(() => {
    crossWordRef.current.reset();
    console.log('RESET!')
  }, [])

  let bam = () => console.log(crossWordRef.isCrosswordCorrect());

  const success = () => {
    !win && setShow(true);
    console.log(win);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    {/* --- METHOD TO SEND THE MAIL --- */ }
    setLoading(true);
    let toSend = {
      first_name: name,
      email: email
    }
    send(
      'service_a36onn9',
      'template_6xyapsm',
      toSend,
      'G99qlWmkf22hk1jWx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setEmailSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setLoading(false);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  Crossword.defaultProps = {
    theme: {
      highlightBackground: 'royalblue',
      // focusBackground: 'blue',
      // cellBackground: 'pink',
      numberColor: 'black'
    }
  }

  const theme = {
    textColor: 'red',
    focusBackground: 'red'
  };

  return (
    <div style={{ backgroundColor: '#0500b0' }}>
      <Header />

      <Modal
        show={show}
        onShow={() => setWin(true)}
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <p>
            You won!!!

                  <br /><br />

                  To sumbit your entry, please enter your name & email below:
                </p>
          <input
            type='text'
            name='first_name'
            placeholder='first name'
            value={name}
            onChange={handleNameChange}
          ></input>
          <br/><br/>
          <input
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleEmailChange}
          ></input>
          <br/><br/>
          {!emailSuccess && !loading && <Button disable={emailSuccess} onClick={onSubmit}>Submit</Button>}
          {!emailSuccess && loading && <Button><Spinner animation="border" /></Button>}
          {emailSuccess && <Button onClick={() => setShow(false)}>Close</Button>}
          <br/><br/>
          {emailSuccess && <p>Entry submission successful, check your email to verfy</p>}
        </Modal.Body>
      </Modal>

      <Container>
        <Row>
          <Col>
            <br />
            <h2 style={{ color: 'white', textAlign: 'center' }}>2022 Mother's Day competition</h2>
            {/* <Button onClick={() => console.log(crossWordRef.current.isCrosswordCorrect())}>Correct?</Button>
            <Button onClick={() => console.log(crossWordRef.current.fillAllAnswers())}>Correct!</Button>
            <Button onClick={() => console.log(crossWordRef.current.reset())}>Reset</Button> */}
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <br/>
            <div style={{textAlign: 'center'}}>
              <img src={BOTW} className="s-n-g-pic" alt="logo" />
            </div>
            <br />
            <p style={{ color: 'white', width: '90%', marginLeft: '5%' }}>
              Successfully solve the crossword in order to be in for a chance at winning Simon & Garfunkel's <em><b>Bridge Over Troubled Water</b></em>
              <br/><br/>
              As a tip, the clues are often associated with lyrics from the album. Typing in answers can be made more convenient by clicking on each clue
              <br/><br/>
              Good luck!
              <br/><br/><br/>
              {win && !emailSuccess && <Button onClick={() => setShow(true)}>Open submit panel</Button>}
            </p>
          </Col>
          <Col sm={12} md={6}>
            <div style={{ width: "95%", paddingTop: '4%', paddingLeft: '4%' }}>
              <ThemeProvider theme={theme}>
                <Crossword ref={crossWordRef} onCrosswordCorrect={() => success()} data={data} />
              </ThemeProvider>
            </div>




          </Col>
        </Row>
      </Container>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}

export default QrCrossWord;
