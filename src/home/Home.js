import logo from '../logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";
import Header from '../components/header/header'

import MDS from '../Mothers day slide.png';
import MDSA from '../Mothers day slide alt.png';
import PCF from '../Prescot church front.jpg';
import PCA from '../Prescot church above.jpg';

import {
  Container,
  Row,
  Col,
  Button,
  Carousel
} from 'react-bootstrap';

function Home() {
  return (
    <div style={{ backgroundColor: '#0500b0' }}>
      <Header />

      <br />

      <Carousel>
        <Carousel.Item>
          <div style={{ textAlign: 'center' }}>
            <a href='/mothers-day'>
              <img src={MDSA} width='80%' />
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ textAlign: 'center' }}>
            <img src={PCF} width='80%' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ textAlign: 'center' }}>
            <img src={PCA} width='80%' />
          </div>
        </Carousel.Item>
      </Carousel>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


    </div>
  );
}

export default Home;
