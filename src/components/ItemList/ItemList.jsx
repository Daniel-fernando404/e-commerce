import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.length > 0 ? (
                products.map(product => (
                    <Item key={product.id} product={product} />
                ))
            ) : (
                <p className="text-center">No hay productos disponibles</p>
            )}
        </div>
    )
}

export default ItemList