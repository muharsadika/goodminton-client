import Breadcrump from '../../components/Breadcrump'
import CardDescription from './parts/CardDescription'
import CardStringDetail from './parts/CardStringDetail'


function StringDetailContainer() {
  return (
    <div className="flex flex-col gap-10 py-10 px-20">
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