

function CardMainCategories() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[2px]">
        <div>
          <p className="text-xl font-bold text-center">MAIN CATEGORIES</p>
        </div>
        <div className="flex gap-[2px] justify-between">
          <div className="flex flex-col rounded-md shadow-md justify-between gap-[2px]">
            <img src="https://vsmash.com/wp-content/uploads/2023/08/shoes-section-web-1.webp" alt="Shoes 1" className="w-[420px] h-full rounded-md" />
            <img src="https://vsmash.com/wp-content/uploads/2023/08/apparel-category-web.webp" alt="Shoes 2" className="w-[420px] h-full rounded-md" />
          </div>
          <div className="flex-col">
            <img src="https://vsmash.com/wp-content/uploads/2023/08/racquet-website-category.webp" alt="Shoes 1" className="w-[300px] rounded-md" />
          </div>
        </div>
        <div className="flex flex-row gap-[2px]">
          <img src="https://vsmash.com/wp-content/uploads/2023/08/bag-category-web.webp" alt="Shoes 2" className="w-[240px] rounded-md" />
          <img src="https://vsmash.com/wp-content/uploads/2023/08/Accessories.webp" alt="Shoes 2" className="w-[240px] rounded-md" />
          <img src="https://vsmash.com/wp-content/uploads/elementor/thumbs/stringing-categories-qbnq5154zqhmoo2cw7fb0ppar4o45b54fqpdvduviq.webp" alt="Shoes 2" className="w-[240px] rounded-md" />
        </div>
      </div>
    </>
  )
}

export default CardMainCategories;
