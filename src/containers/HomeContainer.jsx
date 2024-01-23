import CardMainCategories from "./CardMainCategories"
import CardNewArrival from "./CardNewArrival"
import CardPlayerCollection from "./CardPlayerCollection"


function HomeContainer() {
  return (
    <div className="w-full min-h-screen mt-28">
      <div className="mb-20">
        <CardMainCategories />
      </div>
      <div className="mb-20">
        <CardNewArrival />
      </div>
      <div className="mb-20">
        <CardPlayerCollection />
      </div>
    </div>
  )
}

export default HomeContainer