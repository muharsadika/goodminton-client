import Breadcrump from '../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardStringDetail from './parts/CardStringDetail'

function StringDetailContainer() {
  return (
    <div className="flex flex-col py-10 gap-10">
      <div>
        <Breadcrump link="/strings" page="Strings" />
      </div>
      <div>
        <CardStringDetail />
      </div>
      <div>
        <CardDescription />
      </div>
    </div>
  )
}

export default StringDetailContainer