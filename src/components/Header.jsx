import logo from '../assets/react-logo.png'
import './Nav.css'

export default function Header (){
        return (
            <header className='nav-section'>
                <div className='react-icon-text'>
                    <img className='react-logo' src={logo} alt="React-Logo" />
                    <span className='icon-text'>React Facts</span>
                </div>
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-list-items'>Pricing</li>
                        <li className='nav-list-items'>About</li>
                        <li className='nav-list-items'>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    };  


    