import ProductFilter from "../../../containers/_products/ProductFilter"
import Products from "../../../containers/_products/Products"
import { ProductProvider } from "../../../containers/_products/hooks/ProductContext"
import Layout from "../../../layout/Layout"

function Shirts() {
  return (
    <Layout>
      <ProductProvider>
        <div className="flex flex-row gap-5">
          <div className="w-[20%]">
            <ProductFilter />
          </div>
          <div className="w-[80%]">
            <Products category="shirts" />
          </div>
        </div>
      </ProductProvider>
    </Layout>
  )
}

export default Shirts