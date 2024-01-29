import CardRacket from "./parts/CardRacket"
import CardFilter from "./parts/CardFilter"

function DetailContainer() {
  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="w-[20%]" style={{ border: "1px solid red"}}>
        <CardFilter />
      </div>
      <div className="w-[80%]">
        <CardRacket />
      </div>
    </div>
  )
}

export default DetailContainer