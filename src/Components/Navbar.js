import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar-Container'>
            <div className='logo'>
                <img id='logo' src='./Images/logo.png' />
                <img id='logoRes' src='./Images/logoRes.png' />
            </div>

            <div className='Anchors'>
                <Link>HOME</Link>
                <Link>ABOUT</Link>
                <Link>SERVICES</Link>
                <Link>CONTACT US</Link>
            </div>

            <div className='DownloadBtn'>
                <button>DOWNLOAD APP</button>
            </div>
            <div className='sideBar'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default Navbar