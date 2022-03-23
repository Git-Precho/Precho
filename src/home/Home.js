import logo from '../logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Precho
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <li>
        <Link to="/mothers-day">Mother's Day</Link>
      </li>
      </header>


    </div>
  );
}

export default Home;
