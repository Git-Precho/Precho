import './header.css';
import logo from '../../PrechoLogo.png';


const Header = () => (
  <div className="precho-header">
    <a href="/"><img src={logo} className="header-logo" alt="logo" /></a>
  </div>
)

export default Header;