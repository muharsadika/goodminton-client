import CardMainCategories from "./parts/CardMainCategories"
import CardNewArrival from "./parts/CardNewArrival"
import CardPlayerCollection from "./parts/CardPlayerCollection"
import CardSlider from "./parts/CardSlider"

function HomeContainer() {
  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <CardSlider />
      </div>
      <div className="mb-20">
        <CardMainCategories />
      </div>
      <div className="mb-20">
        <CardNewArrival />
      </div>
      <div className="mb-10">
        <CardPlayerCollection />
      </div>
    </div>
  )
}

export default HomeContainer