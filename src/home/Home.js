import logo from '../logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";
import Header from '../components/header/header'

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

function Home() {
  return (
    <div style={{backgroundColor: '#0500b0'}}>
      <Header />

      <br/>

      <p style={{color: 'white'}}>
      Click here to take part in our Mother's Day competition
      </p>
      <Link to="/mothers-day">
        <Button style={{marginLeft: '20px'}}>Boop</Button>
      </Link>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </div>
  );
}

export default Home;
