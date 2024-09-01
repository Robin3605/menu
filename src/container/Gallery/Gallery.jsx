
import {images} from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { useRef } from 'react';

const galleryImages = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04 ]

const Gallery = () => {
  const scrollRef = useRef(null);


  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else{
      current.scrollLeft += 300;
    }
  }

  return(
    <section className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#aaa', marginTop: '2rem'}}>tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam selerisque sapien. et, penatibus aliquan amet tllus</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index +1}`}>
              <img src={image} alt='gallery images'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </section>
  )
};

export default Gallery;
