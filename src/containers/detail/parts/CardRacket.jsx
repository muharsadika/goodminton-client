function CardRacket() {
  const racketsData = [
    {
      name: "ARC SABER 11 PRO",
      color: "GRAYISH PEARL",
      price: "IDR 2.500.000",
      imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg"
    },
    {
      name: "ARC SABER 11 PRO",
      color: "GRAYISH PEARL",
      price: "IDR 2.500.000",
      imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg"
    },
    {
      name: "ARC SABER 11 PRO",
      color: "GRAYISH PEARL",
      price: "IDR 2.500.000",
      imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg"
    },
    {
      name: "ARC SABER 11 PRO",
      color: "GRAYISH PEARL",
      price: "IDR 2.500.000",
      imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg"
    }
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="text-lg font-bold">
        <p>YONEX RACKETS</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {racketsData.map((racket, index) => (
          <div key={index} className="flex flex-col justify-center gap-3 w-[20%]" style={{ border: "1px solid blue" }}>
            <div className="">
              <img src={racket.imageSrc} alt={racket.name} className="w-72" />
            </div>
            <div className="flex flex-col m-auto text-justify gap-1 text-[13px]">
              <p className="font-bold">{racket.name}</p>
              <p className="text-[10px]">{racket.color}</p>
              <p className="font-serif font-bold">{racket.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRacket;
