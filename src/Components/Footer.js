import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='titleFooter'>
        <p id='whiteLogo'>Planet W<span><img id='bhingri' src='./Images/bhingri.png' /></span>sh</p>
        <p id='laundry'>Online Laundry Service</p>
      </div>


      <div className='grids'>
        <div className='reachUs'>
          <p id='TitleReachUs'>Reach Us</p>
          <div id='number'>📞 +1012 3456 789</div>
          <div id='mail'>📩 demo@gmail.com</div>
          <div id='address'>🔴 Golden City Center, Chh.<br />
            Sambhajinagar</div>
        </div>

        <div className='company'>

          <p id='companyTitle'>COMPANY</p>
          <Link id='links'>About</Link>
          <Link id='links'>Contact</Link>
          <Link id='links'>Services</Link>
        </div>


        <div className='legals'>
          <p id='legalsTitle'>Legal</p>
          <Link id='links'>Privacy Policy</Link>
          <Link id='links'>Terms & Services</Link>
          <Link id='links'>Terms Of Use</Link>
          <Link id='links'>Refund Policy</Link>
        </div>

        <div className='quickLinks'>
          <p id='quickLinksTitle'>Quick Links</p>
          <Link id='links'>Download App</Link>
        </div>

        <div className='qr'>
          <img src='./Images/qr.png' />
          <p id='qrText'>Scan QR To Download  App</p>
        </div>
      </div>

    </div>
  )
}

export default Footer