function CardPlayerCollection() {
  return (
    <div className="flex flex-col justify-center gap-3">
      <div className="flex justify-center text-lg font-bold">
        <p>PLAYER COLLECTION</p>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <img src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_1} alt="Placeholder Image" className="w-72 rounded" />
        <img src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_2} alt="Placeholder Image" className="w-72 rounded" />
        <img src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_3} alt="Placeholder Image" className="w-72 rounded" />
        <img src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_5} alt="Placeholder Image" className="w-72 rounded" />
        <img src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_6} alt="Placeholder Image" className="w-72 rounded" />
      </div>
    </div>
  )
}

export default CardPlayerCollection