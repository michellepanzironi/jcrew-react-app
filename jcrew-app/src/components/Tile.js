import { Link } from 'react-router-dom';

const Tile = ({ product }) => {
  const name = product.productDescription;
  const productCode = product.productCode;
  const listPrice = product.listPrice.formatted;
  const nowPrice = product.now ? product.now.formatted : false;
  const defaultColorCode = product.defaultColorCode
  const imageUrl = "https://www.jcrew.com/s7-img-facade/".concat(`${productCode}_${defaultColorCode}`);


  return (
    <Link
      to={`/${productCode}`}
      style={{ margin: '8px', display: 'block', padding: '24px' }}
    >
      <img src={imageUrl} style={{ width: '300px', height: 'auto' }} alt={name} /> 
      <div>{name}</div>
      <span style={{ textDecoration: `${nowPrice ? 'line-through' : 'none'}` }}>
        {listPrice}
      </span>
      <span style={{ color: 'red' }}>{nowPrice}</span>
    </Link>
  )
}

export default Tile;