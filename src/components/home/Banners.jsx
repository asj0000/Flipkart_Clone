import { Carousel } from 'react-responsive-carousel';
import {styled} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerData } from '../../constants/data';

//this prop is used to set size and number of images in carousel on different devices
const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  }
};


const Image=(styled)('img') `
    width: 100% ;
 
`
const Banners = () => {
  return ( 
    <Carousel 
    swipeable={false}        //props used for customizing ou carousel
    draggable={false}
    responsive={responsive}
    infiniteLoop={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    showIndicators={false}
    slidesToSlide={1}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
     
      {
        bannerData.map(data =>(
          <Image src={data.url} alt="banners"/>
        ))
      }
   
    </Carousel>
   );
}
 
export default Banners;