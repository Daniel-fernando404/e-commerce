import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="item-count">
            <div className="d-flex align-items-center gap-3 mb-3">
                <button className="btn btn-outline-secondary" onClick={decrement}>
                    -
                </button>
                <span className="fs-4">{quantity}</span>
                <button className="btn btn-outline-secondary" onClick={increment}>
                    +
                </button>
            </div>
            <button 
                className="btn btn-primary w-100" 
                onClick={() => onAdd(quantity)}
                disabled={stock === 0}
            >
                {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>
        </div>
    )
}

export default ItemCount