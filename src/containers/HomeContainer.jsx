import CardMainCategories from "./CardMainCategories"
import CardNewArrival from "./CardNewArrival"
import CardPlayerCollection from "./CardPlayerCollection"
import CardSlider from "./CardSlider"


function HomeContainer() {
  return (
    <div className="w-full min-h-screen mt-[68px]">
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