
const Tile = ({ name, listPrice, nowPrice, productCode, defaultColorCode }) => {
  const imageUrl = "https://www.jcrew.com/s7-img-facade/".concat(`${productCode}_${defaultColorCode}`)

  return (
    <div style={{ margin: '8px', display: 'block', padding: '24px' }}>
      <img src={imageUrl} style={{ width: '300px', height: 'auto' }} alt={name} /> 
      <div>{name}</div>
      <span style={{ textDecoration: `${nowPrice ? 'line-through' : 'none'}` }}>
        {listPrice}
      </span>
      <span style={{ color: 'red' }}>{nowPrice}</span>
    </div>
  )
}

export default Tile;