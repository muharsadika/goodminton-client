import CardRacket from "./parts/CardRacket";
import CardFilter from "./parts/CardFilter";
import { RacketProvider } from "./RacketContext";

function RacketContainer() {

  return (
    <RacketProvider>
      <div className="flex flex-row gap-5">
        <div className="w-[20%]">
          <CardFilter />
        </div>
        <div className="w-[80%]">
          <CardRacket />
        </div>
      </div>
    </RacketProvider>
  )
}

export default RacketContainer;
