import CardShirt from "./parts/CardShirt";
import CardShirtFilter from "./parts/CardShirtFilter"
import { ShirtProvider } from "./ShirtContext";

function ShirtContainer() {
  return (
    <ShirtProvider>
      <div className="flex flex-row gap-5">
        <div className="w-[20%]">
          <CardShirtFilter />
        </div>
        <div className="w-[80%]">
          <CardShirt />
        </div>
      </div>
    </ShirtProvider>
  )
}

export default ShirtContainer;
