import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
    // const store = useContext();
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-div">
                        <Link to="/" className='Logo'>Logo</Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => navigate('/signup')} className="button">SignUp</button>
                </div>
            </header>
        </>
    )
}

export default Header
