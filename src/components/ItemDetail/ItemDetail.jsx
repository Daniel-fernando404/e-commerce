import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        console.log(`Agregaste ${quantity} unidades al carrito`)
    }

    return (
        <div className="item-detail">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="item-detail-price">${product.price.toLocaleString()}</p>
                    <p className="text-muted">{product.description}</p>
                    <p className="text-secondary">Stock disponible: {product.stock}</p>
                    
                    {quantityAdded > 0 ? (
                        <div>
                            <p className="text-success">¡Agregaste {quantityAdded} unidades al carrito!</p>
                            <Link to="/" className="btn btn-primary me-2">Seguir comprando</Link>
                            <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
                        </div>
                    ) : (
                        <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail