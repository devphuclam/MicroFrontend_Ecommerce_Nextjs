'use client';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        {/* CONTACT */}
        <div className='footer-column'>
          <h4>CONTACT US</h4>
          <p>+1 (844) 326-6000</p>
          <p className='footer-link'>Email Us</p>
          <p>Mon–Fri 9am–3pm PT</p>
        </div>

        {/* CUSTOMERS */}
        <div className='footer-column'>
          <h4>CUSTOMERS</h4>
          <p className='footer-link'>Start a Return</p>
          <p className='footer-link'>Return Policy</p>
          <p className='footer-link'>FAQ</p>
          <p className='footer-link'>Catalogs and Mailers</p>
          <p className='footer-link'>About Group Gifting</p>
        </div>

        {/* COMPANY */}
        <div className='footer-column'>
          <h4>COMPANY</h4>
          <p className='footer-link'>About Us</p>
          <p className='footer-link'>Sustainability</p>
          <p className='footer-link'>Discover Revive</p>
          <p className='footer-link'>Careers</p>
          <p className='footer-link'>Privacy Policy</p>
          <p className='footer-link'>Terms</p>
        </div>

        {/* SUBSCRIBE */}
        <div className='footer-subscribe'>
          <h4>Get the latest new from us</h4>
          <input type='email' placeholder='Enter your email address' />
          <p className='footer-policy'>
            By signing up, you agree to our <span>Privacy Policy</span> and{' '}
            <span>Terms of Service</span>.
          </p>
          <button>Subscribe</button>
        </div>
      </div>

      <div className='footer-bottom'>©FITTORY</div>
    </footer>
  );
}
