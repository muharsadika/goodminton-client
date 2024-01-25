

function CardMainCategories() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="">
          <p className="text-lg font-bold">MAIN CATEGORIES</p>
        </div>
        <div className="flex gap-[5px] justify-between">
          <div className="flex flex-col shadow-md justify-between gap-[5px]">
            <img src="https://vsmash.com/wp-content/uploads/2023/08/shoes-section-web-1.webp" alt="Shoes 1" className="rounded-lg w-[600px] h-full" />
            <img src="https://vsmash.com/wp-content/uploads/2023/08/apparel-category-web.webp" alt="Shoes 2" className="rounded-lg w-[600px] h-full" />
          </div>
          <div className="rounded-lg flex-col">
            <img src="https://vsmash.com/wp-content/uploads/2023/08/racquet-website-category.webp" alt="Shoes 1" className="rounded-lg w-[400px]" />
          </div>
        </div>
        <div className="rounded-lg flex flex-row gap-[5px] mt-[-10px]">
          <img src="https://vsmash.com/wp-content/uploads/2023/08/bag-category-web.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
          <img src="https://vsmash.com/wp-content/uploads/2023/08/Accessories.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
          <img src="https://vsmash.com/wp-content/uploads/elementor/thumbs/stringing-categories-qbnq5154zqhmoo2cw7fb0ppar4o45b54fqpdvduviq.webp" alt="Shoes 2" className="rounded-lg w-[333px]" />
        </div>
      </div>
    </>
  )
}

export default CardMainCategories;
