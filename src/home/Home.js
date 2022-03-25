import logo from '../logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";
import Header from '../components/header/header'

function Home() {
  return (
    <div style={{backgroundColor: '#0500b0'}}>
      <Header />

      <li style={{color: 'red'}}>
        <Link style={{color: 'red'}} to="/mothers-day">Mother's Day</Link>
      </li>
      <li>
        <Link style={{color: 'red'}} to="/develop">Develop Stage</Link>
      </li>


    </div>
  );
}

export default Home;
