
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='chefs world'/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam selerisque sapien. et, penatibus aliquan amet tllus</p>
        </div>
        <p className='p__opensans'>lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam selerisque sapien. et, penatibus aliquan amet tllu</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </section>
);

export default Chef;
