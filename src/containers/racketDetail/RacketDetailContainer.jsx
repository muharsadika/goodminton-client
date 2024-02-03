import Breadcrump from '../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardRacketDetail from './parts/CardRacketDetail'

function RacketDetailContainer() {
  return (
    <div className="flex flex-col gap-10 py-10 px-20">
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