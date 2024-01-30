import Breadcrump from '../../components/Breadcrump'
import CardRacketDetail from './parts/CardRacketDetail'

function RacketDetailContainer() {
  return (
    <div className="">
      <div>
        <Breadcrump link="/rackets" page="Rackets"/>
      </div>
      <div>
        <CardRacketDetail />
      </div>
    </div>
  )
}

export default RacketDetailContainer