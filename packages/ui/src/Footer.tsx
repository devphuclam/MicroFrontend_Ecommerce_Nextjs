'use client';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='top'>
        {/* CONTACT */}
        <div className='column'>
          <h4>CONTACT US</h4>
          <p>+1 (844) 326-6000</p>
          <p className='link'>Email Us</p>
          <p>Mon–Fri 9am–3pm PT</p>
        </div>

        {/* CUSTOMERS */}
        <div className='column'>
          <h4>CUSTOMERS</h4>
          <p className='link'>Start a Return</p>
          <p className='link'>Return Policy</p>
          <p className='link'>FAQ</p>
          <p className='link'>Catalogs and Mailers</p>
          <p className='link'>About Group Gifting</p>
        </div>

        {/* COMPANY */}
        <div className='column'>
          <h4>COMPANY</h4>
          <p className='link'>About Us</p>
          <p className='link'>Sustainability</p>
          <p className='link'>Discover Revive</p>
          <p className='link'>Careers</p>
          <p className='link'>Privacy Policy</p>
          <p className='link'>Terms</p>
        </div>

        {/* SUBSCRIBE */}
        <div className='subscribe'>
          <h4>Get the latest new from us</h4>
          <input type='email' placeholder='Enter your email address' />
          <p className='policy'>
            By signing up, you agree to our <span>Privacy Policy</span> and{' '}
            <span>Terms of Service</span>.
          </p>
          <button>Subscribe</button>
        </div>
      </div>

      <div className='bottom'>©CEIN</div>
    </footer>
  );
}
