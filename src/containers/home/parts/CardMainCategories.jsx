

function CardMainCategories() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="">
          <p className="text-lg font-bold">MAIN CATEGORIES</p>
        </div>
        <div className="flex gap-[5px] justify-between">
          <div className="flex flex-col shadow-md justify-between gap-[5px]">
            <img src="/src/assets/images/card-main-category/shoes-section-web-1.webp" alt="Shoes 1" className="rounded-lg w-[600px] h-full" />
            <img src="/src/assets/images/card-main-category/apparel-category-web.webp" alt="Shoes 2" className="rounded-lg w-[600px] h-full" />
          </div>
          <div className="rounded-lg flex-col">
            <img src="/src/assets/images/card-main-category/racquet-website-category.webp" alt="Shoes 1" className="rounded-lg w-[400px]" />
          </div>
        </div>
        <div className="rounded-lg flex flex-row gap-[5px] mt-[-10px]">
          <img src="/src/assets/images/card-main-category/bag-category-web.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
          <img src="/src/assets/images/card-main-category/Accessories.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
          <img src="/src/assets/images/card-main-category/stringing-categories-qbnq5154zqhmoo2cw7fb0ppar4o45b54fqpdvduviq.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
        </div>
      </div>
    </>
  )
}

export default CardMainCategories;
