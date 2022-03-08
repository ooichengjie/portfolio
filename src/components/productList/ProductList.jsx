import Product from '../product/Product'
import './productList.css'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
        <h1 className="pl-title">Creativity and Innovative. It's cheng jie</h1> 
        <p className="pl-desc">
        Cheng Jie is a creative portfolio that the skills have been demonstrated.
        The stunning portfolio shows that the creativity of the developer. 
        </p>
        <div className="pl-list">
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
        </div>
    </div>    
    </div>
  )
}

export default ProductList