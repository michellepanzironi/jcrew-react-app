import { Link, withRouter } from 'react-router-dom';
import Tile from './Tile.js';

const ProductPage = ({ productList }) => {
  // there's probably a better way than passing the whole list
  const productCode = window.location.pathname.split('/')[1];
  const product = productList.find(product => product['productCode'] === productCode)

  return (
    <div>
      <Tile product={product} />
      <div>
        {product.colors.map(color => {
          const colorCode = color.colorCode;
          const imageUrl = "https://www.jcrew.com/s7-img-facade/".concat(`${productCode}_${colorCode}`)
          return (
            <img src={imageUrl} style={{ width: '30px', height: 'auto' }} alt={colorCode}/>
          )
        })}
      </div>
      <Link to='/'>back</Link>
    </div>
  )
}

export default withRouter(ProductPage);