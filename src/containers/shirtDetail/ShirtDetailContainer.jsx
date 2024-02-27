import Breadcrump from '../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardShirtDetail from './parts/CardShirtDetail'


function ShirtDetailContainer() {
  return (
    <div className="flex flex-col gap-10 py-10 px-20">
      <div>
        <Breadcrump link="/shirts" page="Shirts" />
      </div>
      <div>
        <CardShirtDetail />
      </div>
      <div>
        <CardDescription />
      </div>
    </div>
  )
}

export default ShirtDetailContainer