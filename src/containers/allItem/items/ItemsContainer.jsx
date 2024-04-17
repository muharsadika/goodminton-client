import CardItems from "./parts/CardItems";
import CardFilter from "./parts/CardFilter";
import { ItemsProvider } from "./ItemsContext";

function ItemsContainer() {
  return (
    <ItemsProvider>
      <div className="flex flex-row gap-5">
        <div className="w-[20%]">
          <CardFilter />
        </div>
        <div className="w-[80%]">
          <CardItems />
        </div>
      </div>
    </ItemsProvider>
  )
}

export default ItemsContainer;
