
import {FiFacebook, FiLinkedin, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <footer className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Chia Cundinamarca Colombia</p>
        <p className='p__opensans'>+57 3204864853</p>
        <p className='p__opensans'>+57 3143874332</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='contact images'/>
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of the others.</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: '15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>10:00 am - 10:00 pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>10:00 am - 9:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Robin. All Rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
