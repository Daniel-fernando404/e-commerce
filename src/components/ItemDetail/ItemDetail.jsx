import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useCart()

  const handleOnAdd = (qty) => {
    setQuantityAdded(qty)
    addItem(product, qty)
  }

  return (
    <div className="item-detail">
      <div className="row g-4">
        <div className="col-md-5">
          <div className="item-detail__imageBox">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="col-md-7">
          <h2 className="item-detail__title">{product.name}</h2>
          <p className="item-detail__price">${product.price.toLocaleString()}</p>
          <p className="text-muted mb-2">{product.description}</p>
          <p className="text-secondary">Stock disponible: {product.stock}</p>

          {product.stock === 0 ? (
            <div className="mt-4">
              <p className="alert alert-warning mb-3">Producto sin stock</p>
              <Link to="/" className="btn btn-outline-primary">Volver al listado</Link>
            </div>
          ) : quantityAdded > 0 ? (
            <div className="mt-4">
              <p className="alert alert-success">
                Agregaste {quantityAdded} {quantityAdded === 1 ? 'unidad' : 'unidades'} al carrito
              </p>
              <Link to="/" className="btn btn-outline-primary me-2">Seguir comprando</Link>
              <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
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