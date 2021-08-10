import { useParams, Link } from 'react-router-dom';
import Tile from './Tile.js';

const ProductPage = (product) => {
  const id = useParams();
  console.log(id);
  debugger;
  return (
    <div>
      <Tile product={product} />
      <Link to='/' />
    </div>
  )
}

export default ProductPage;