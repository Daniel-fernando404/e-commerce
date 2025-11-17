import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({ products }) => {
  if (!products.length) return <p className="text-center">No hay productos</p>
  return (
    <div className="item-list">
      {products.map(p => <Item key={p.id} product={p} />)}
    </div>
  )
}

export default ItemList