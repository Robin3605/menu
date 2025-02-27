
import {images} from '../../constants';

// eslint-disable-next-line react/prop-types
const SubHeading = ({title}) => (
  <section style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon__img'/>
  </section>
);

export default SubHeading;
