import Breadcrump from '../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardRacketDetail from './parts/CardRacketDetail'

function RacketDetailContainer() {
  return (
    <div className="flex flex-col py-10 gap-10">
      <div>
        <Breadcrump link="/rackets" page="Rackets" />
      </div>
      <div>
        <CardRacketDetail />
      </div>
      <div>
        <CardDescription />
      </div>
    </div>
  )
}

export default RacketDetailContainer