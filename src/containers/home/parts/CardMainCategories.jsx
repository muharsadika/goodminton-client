function CardMainCategories() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="">
        <p className="text-lg font-bold">MAIN CATEGORIES</p>
      </div>
      <div className="flex gap-[5px] justify-between">
        <div className="flex flex-col shadow-md justify-between gap-[5px]">
          <img src={import.meta.env.CARD_MAIN_CATEGORY_1} alt="Shoes 1" className="rounded-lg w-[600px] h-full" />
          <img src={import.meta.env.CARD_MAIN_CATEGORY_2} alt="Shoes 2" className="rounded-lg w-[600px] h-full" />
        </div>
        <div className="rounded-lg flex-col">
          <img src={import.meta.env.CARD_MAIN_CATEGORY_3} alt="Shoes 1" className="rounded-lg w-[400px]" />
        </div>
      </div>
      <div className="rounded-lg flex flex-row gap-[5px] mt-[-10px]">
        <img src={import.meta.env.CARD_MAIN_CATEGORY_4} alt="Shoes 2" className="rounded-lg w-[333px]" />
        <img src={import.meta.env.CARD_MAIN_CATEGORY_5} alt="Shoes 2" className="rounded-lg w-[333px]" />
        <img src={import.meta.env.CARD_MAIN_CATEGORY_6} alt="Shoes 2" className="rounded-lg w-[333px]" />
      </div>
    </div>
  )
}

export default CardMainCategories;
