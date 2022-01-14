import './styles.css';
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>jeffe</h1>
                    <a href="https://github.com/edivandosevero05" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/edivandosevero</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}