import Breadcrump from '../../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardItemDetail from './parts/CardItemDetail'

function ItemDetailContainer() {
  return (
    <div className="flex flex-col gap-10 py-10 px-20">
      <div>
        <Breadcrump link="/category/item" page="Item" />
      </div>
      <div>
        <CardItemDetail />
      </div>
      <div>
        <CardDescription />
      </div>
    </div>
  )
}

export default ItemDetailContainer