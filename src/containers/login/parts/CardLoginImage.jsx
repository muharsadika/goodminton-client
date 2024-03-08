function CardLoginImage() {
  return (
    <div className="w-full h-screen">
      <img
        src={import.meta.env.VITE_CARD_PLAYER_COLLECTION_6}
        alt="Placeholder Image"
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default CardLoginImage