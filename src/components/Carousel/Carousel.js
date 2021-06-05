import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className='ml-5'>
                <Slider {...settings}>

      <div className="col-2 container">
       
        <img className="mx-2" src="https://www.bhphotovideo.com/images/images1000x1000/canon_eos_r_mirrorless_digital_1433711.jpg" alt="" />
      </div>

      <div>
      
        <img className="mx-2"  src="https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg" alt="" />
      </div>

      <div>
    
        <img  className="mx-2" src="http://powercozmo.com/public/uploads/all/7fqeg69OJ1mmM1SztvOJtNViBMoNvptBCkZ49eQg.jpg" alt="" />
      </div>

      <div>
  
        <img className="mx-2"  src="https://saversappliances.com.ph/wp-content/uploads/2020/10/Sample-2TC32BG1X.png" alt="" />
      </div>

      <div>
     
        <img className="mx-2"  src="https://assets-global.website-files.com/5b2c8a9fa49e8e2d4604e60b/5eb34dd704ebab344d095278_nuraphone-desktop.png" alt="" />
      </div>

      <div>
     
        <img className="mx-2"  src="https://media.vogue.fr/photos/5fb69103e8560ed945b767b4/master/w_1600%2Cc_limit/Air%252520Jordan%25252013%252520Retro%252520Flint.jpg" alt="" />
      </div>

    </Slider>
        </div>
    );
};

export default Carousel;