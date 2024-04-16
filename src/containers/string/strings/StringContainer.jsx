import CardString from "./parts/CardString";
import CardStringFilter from "./parts/CardStringFilter"
import { StringProvider } from "./StringContext";

function StringContainer() {
  return (
    <StringProvider>
      <div className="flex flex-row gap-5">
        <div className="w-[20%]">
          <CardStringFilter />
        </div>
        <div className="w-[80%]">
          <CardString />
        </div>
      </div>
    </StringProvider>
  )
}

export default StringContainer;
