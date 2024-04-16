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








// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CardSlider = () => {
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImagesLoaded(true);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...sliderSettings}>
//       <div>
//         {imagesLoaded ? (
//           <img
//             src="https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg"
//             alt="Slider Image 1"
//             onLoad={handleImageLoad}
//           />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//       <div>
//         {/* Add more slides as needed */}
//         {imagesLoaded ? (
//           <img
//             src="https://vsmash.com/wp-content/uploads/2023/08/1000z-launch-website-banner.webp"
//             alt="Slider Image 2"
//             onLoad={handleImageLoad}
//           />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//       {/* Add more slides as needed */}
//     </Slider>
//   );
// };

// export default CardSlider;



// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CardSlider = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...sliderSettings} >
//       <div>
//         <img src="https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg" alt="Slider Image 1" />
//       </div>
//       <div>
//         <img src="https://vsmash.com/wp-content/uploads/2023/08/1000z-launch-website-banner.webp" alt="Slider Image 2" />
//       </div>
//       {/* Add more slides as needed */}
//     </Slider>
//   );
// };

// export default CardSlider;


// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CardSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: '0',
//   };

//   const photos = [
//     'https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg',
//     'https://vsmash.com/wp-content/uploads/2023/08/1000z-launch-website-banner.webp',
//     'https://vsmash.com/wp-content/uploads/2023/11/800pro-website-banner-launch.jpg',
//     // Add more photo URLs as needed
//   ];

//   return (
//     <Slider {...settings}
//       // style={{ maxWidth: '1520px', margin: 'auto' }}
//       className='w-[1520px] m-auto'
//     >
//       {photos.map((photo, index) => (
//         <div key={index} style={{ textAlign: 'center' }}>
//           <img
//             src={photo}
//             alt={`Slide ${index + 1}`}
//           // style={{ maxWidth: '100%', maxHeight: '1520px', margin: '0 auto' }}
//           // className='w-[1520px] m-auto'
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default CardSlider;



// import Slider from "react-slick"

// function CardSlider() {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: '0',
//   };

//   return (
//     <Slider {...sliderSettings} className="w-[500px]">
//       <img src="https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg" className="w-[500px]" />
//       <img src="https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg" className="w-[500px]" />
//       {/* <img src="https://vsmash.com/wp-content/uploads/2024/01/nf-nextage-website-banner.jpg" className="w-[500px]" /> */}
//     </ Slider >
//   )
// }

// export default CardSlider

// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CardSlider = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: '0',
//   };

//   return (
//     <div className='w-[1000px] m-auto' style={{border: "1px solid red"}}>
//       <Slider {...sliderSettings} >
//         <div className='text-center'>
//           <img
//             src="https://badmintonhq.co.uk/cdn/shop/products/e6818601-58c1-4a3d-8c2b-a9762f57d478.jpg?v=1689166850&width=2048"
//             alt="Yonex Arcsaber 11 Pro"
//             className='mx-auto'
//             style={{ width: '30%', height: 'auto' }}
//           />
//         </div>
//         <div>
//           <img
//             src="https://badmintonhq.co.uk/cdn/shop/products/3ce683cf-348c-4b3e-b7a1-a7c3d9999ad6.jpg?v=1663754339&width=2048"
//             alt="Yonex Arcsaber 7 Pro"
//             className='mx-auto'
//             style={{ width: '30%', height: 'auto' }}
//           />
//         </div>
//         <div>
//           <img
//             src="https://badmintonhq.co.uk/cdn/shop/products/45b4089c-a7b8-4184-8e3e-65fdd4e92af6.jpg?v=1638019663&width=2048"
//             alt="Yonex Astrox 88S Pro"
//             className='mx-auto'
//             style={{ width: '30%', height: 'auto' }}
//           />
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default CardSlider;
