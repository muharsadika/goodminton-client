import CardMainCategories from "./CardMainCategories"
import CardNewArrival from "./CardNewArrival"

function HomeContainer() {
  return (
    <div className="w-full min-h-screen mt-28">
      <div className="mb-10">
        <CardMainCategories />
      </div>
      <div className="mb-10">
        <CardNewArrival />
      </div>
    </div>
  )
}

export default HomeContainer