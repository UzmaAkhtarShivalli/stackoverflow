import React from 'react'
import { Link } from 'react-router-dom'

import logostackoverflowicon from '../assests/logostackoverflowicon.png'
import searchbar from '../assests/searchbar.png'
import Avatar from '../components/Avatar/Avatar'
import Button from '../components/Button/Button'
import "./Navbar.css"

const Navbar = () => {

    var User = null
    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logostackoverflowicon} alt='logostackoverflowicon' width='150' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='search...' />
                    <img src={searchbar} alt='searchbar' width="18" className='searchbar'/>
                </form>
                { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
                <>
                <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User' style={{colo:"white", textDecoration:'none'}}>U</Link></Avatar>
                <button className='nav-item nav-links'>Long out</button>
                </>

                }
            </div>
        </nav>

        
    )
}

export default Navbar