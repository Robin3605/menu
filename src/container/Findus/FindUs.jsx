
import {images} from '../../constants';
import { SubHeading } from '../../components';
const FindUs = () => (
  <section className="app__bg app__Wrapper section__padding" id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Chia Cundinamarca</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 10:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 9:00 pm</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us'/>
    </div>
  </section>
);

export default FindUs;
