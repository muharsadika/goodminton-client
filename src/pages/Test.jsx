import useAuth from '../hooks/useAuth'

function Test() {
  const { userData } = useAuth()

  return (
    <div className='text-3xl'>
      ini userData: {userData}
    </div>
  )
}

export default Test