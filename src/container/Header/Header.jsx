
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <section className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem o'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam selerisque sapien. et, penatibus aliquan amet tllus</p>
      <button type='button' className='custom__button'>Explore Mnu</button>
    </div>
    <div className='app__wrapper_img'>
      <img  src={images.welcome} alt='welcome'/>
    </div>
  </section>
);

export default Header;
