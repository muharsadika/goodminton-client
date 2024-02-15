import { useRacket } from "../containers/racket/hook/useRacket"

function Test() {
  const {
    data: rackets,
    isLoading,
    error
  } = useRacket();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    // <div className="flex flex-col gap-10">
    //   {rackets?.map((racket) => (
    //     <div key={racket.id}>
    //       <h1>{racket.product_name}</h1>
    //       <p>{racket.product_quantity}</p>
    //       <p>{racket.product_price}</p>
    //     </div>
    //   ))}
    // </div>

    <div className="flex flex-col gap-10">
      {rackets?.map((racket) => {
        const description = racket.product_description;
        const flex = description.split(',').find(item => item.trim().startsWith('Flex'));
        const frame = description.split(',').find(item => item.trim().startsWith('Frame'));
        return (
          <div key={racket.id}>
            <h1>{racket.product_name}</h1>
            <p>{racket.product_quantity}</p>
            <p>{racket.product_price}</p>
            <p>{flex}</p>
            <p>{frame}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Test