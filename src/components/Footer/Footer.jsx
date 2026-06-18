import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={youtube_icon} alt="YouTube" />
      </div>
        <ul className="footer-links">
          <li>
            <span className="footer-link--content">Audio Description</span></li>
          <li>
            <span className="footer-link--content">Help Center</span>
          </li>
          <li>
            <span className="footer-link--content">Gift Cards</span>
          </li>
          <li>
            <span className="footer-link--content">Media Center</span>
          </li>
          <li>
            <span className="footer-link--content">Investor Relations</span></li>
          <li><span className="footer-link--content">Jobs </span>
          </li>
          <li>
            <span className="footer-link--content">Netflix Shop </span>
          </li>
          <li>
            <span className="footer-link--content">Terms of Use </span>
          </li>
          <li>
            <span className="footer-link--content">Privacy</span>
          </li>
          <li>
            <span className="footer-link--content">Legal Notices</span>
          </li>
          <li>
            <span className="footer-link--content"> Cookie Preferences</span>
          </li>
          <li>
            <span className="footer-link--content">Corporate Information </span>
          </li>
          <li>
            <span className="footer-link--content">Contact Us</span>
          </li>
          <li>
            <span className="footer-link--content">Do Not Sell or Share My Personal Information</span>
          </li>
          <li>
            <span className="footer-link--content">Ad Choices</span>
          </li>
        </ul>
      <p className="copyright">© 1997-2026 Netflix, Inc.</p>
    </div>
  );
}

export default Footer
