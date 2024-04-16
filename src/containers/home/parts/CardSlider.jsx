import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerPadding: '0',
    fade: true,
  };

  const photos = [
    import.meta.env.VITE_CARD_SLIDER_2,
    import.meta.env.VITE_CARD_SLIDER_3,
    import.meta.env.VITE_CARD_SLIDER_8,
    import.meta.env.VITE_CARD_SLIDER_5,
    import.meta.env.VITE_CARD_SLIDER_7,
    import.meta.env.VITE_CARD_SLIDER_6,
    import.meta.env.VITE_CARD_SLIDER_4,
    import.meta.env.VITE_CARD_SLIDER_1,
  ];

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index} className="mb-5">
          <img src={photo} alt={`Slide ${index + 1}`} className='w-full' />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;