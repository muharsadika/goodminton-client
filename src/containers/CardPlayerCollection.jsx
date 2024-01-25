function CardPlayerCollection() {
  return (
    <div className="flex flex-col justify-center gap-3">
      <div className="flex justify-center text-lg font-bold">
        <p>PLAYER COLLECTION</p>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <img src="/src/assets/images/card-player-collection/web-player1.webp" alt="Placeholder Image" className="w-72 rounded" />
        <img src="/src/assets/images/card-player-collection/web-player2.webp" alt="Placeholder Image" className="w-72 rounded" />
        <img src="/src/assets/images/card-player-collection/web-player3.webp" alt="Placeholder Image" className="w-72 rounded" />
        <img src="/src/assets/images/card-player-collection/web-player4.webp" alt="Placeholder Image" className="w-72 rounded" />
        <img src="/src/assets/images/card-player-collection/web-player5.webp" alt="Placeholder Image" className="w-72 rounded" />
      </div>
    </div>
  )
}

export default CardPlayerCollection