import CardRacket from "./parts/CardRacket"
import CardFilter from "./parts/CardFilter"

function DetailContainer() {
  return (
    <div className="flex flex-row gap-1">
      <div className="w-[20%]" style={{ border: "1px solid red" }}>
        <CardFilter />
      </div>
      <div className="w-[80%]" style={{ border: "1px solid red" }}>
        <CardRacket />
      </div>
    </div>
  )
}

export default DetailContainer