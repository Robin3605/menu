
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <section className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your e-mail address'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </section>
);

export default Newsletter;
