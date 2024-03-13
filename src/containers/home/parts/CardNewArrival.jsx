import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardNewArrival() {
  const photos = [
    import.meta.env.VITE_CARD_NEW_ARRIVAL_1,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_2,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_3,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_4,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_5,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_6,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_7,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_8,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_9,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_10,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_11,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_12,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_13,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_14,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_15,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_16,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_17,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_18,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_19,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_20,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_21,
    import.meta.env.VITE_CARD_NEW_ARRIVAL_22,
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEasing: "linear",
    pauseOnHover: true,
    centerPadding: '0',
    useCSS: true,
    draggable: true,
    focusOnSelect: true,
  }

  return (
    <div>
      <div className="flex justify-center text-lg font-bold">
        <p>NEW ARRIVALS</p>
      </div>
      <div>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="mb-10">
              <div>
                <img src={photo} alt={`Slide ${index + 1}`} />
              </div>
              <div className="text-center text-[13px] font-bold">
                <p>
                  YONEX PRO RACQUET BAG 92429EX
                </p>
                <p>
                  COBALT BLUE
                </p>
              </div>
              <div className="text-center text-[13px] mt-3 font-serif">
                <p>IDR 1.299.000</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>


    // <div className="flex flex-col justify-center gap-3">
    //   <div className="flex justify-center text-lg font-bold">
    //     <p>NEW ARRIVALS</p>
    //   </div>
    //   <div className="flex flex-row justify-center gap-5">

    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <img src={import.meta.env.VITE_CARD_NEW_ARRIVAL_16} alt="Placeholder Image" className="w-72" />
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] font-bold">
    //         <p>
    //           YONEX PRO RACQUET BAG 92429EX
    //         </p>
    //         <p>
    //           COBALT BLUE
    //         </p>
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] mt-3 font-serif">
    //         <p>IDR 1.299.000</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <img src={import.meta.env.VITE_CARD_NEW_ARRIVAL_16} alt="Placeholder Image" className="w-72" />
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] font-bold">
    //         <p>
    //           YONEX PRO RACQUET BAG 92429EX
    //         </p>
    //         <p>
    //           COBALT BLUE
    //         </p>
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] mt-3 font-serif">
    //         <p>IDR 1.299.000</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <img src={import.meta.env.VITE_CARD_NEW_ARRIVAL_16} alt="Placeholder Image" className="w-72" />
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] font-bold">
    //         <p>
    //           YONEX PRO RACQUET BAG 92429EX
    //         </p>
    //         <p>
    //           COBALT BLUE
    //         </p>
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] mt-3 font-serif">
    //         <p>IDR 1.299.000</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <img src={import.meta.env.VITE_CARD_NEW_ARRIVAL_16} alt="Placeholder Image" className="w-72" />
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] font-bold">
    //         <p>
    //           YONEX PRO RACQUET BAG 92429EX
    //         </p>
    //         <p>
    //           COBALT BLUE
    //         </p>
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] mt-3 font-serif">
    //         <p>IDR 1.299.000</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <img src={import.meta.env.VITE_CARD_NEW_ARRIVAL_16} alt="Placeholder Image" className="w-72" />
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] font-bold">
    //         <p>
    //           YONEX PRO RACQUET BAG 92429EX
    //         </p>
    //         <p>
    //           COBALT BLUE
    //         </p>
    //       </div>
    //       <div className="flex flex-col text-center text-[13px] mt-3 font-serif">
    //         <p>IDR 1.299.000</p>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default CardNewArrival