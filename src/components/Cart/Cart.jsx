import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './cart.css'

const Cart = () => {
  const { cart, removeItem, clear, getTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="text-muted">Agrega productos para comenzar tu compra.</p>
        <Link to="/" className="btn btn-primary mt-3">Ver productos</Link>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item card mb-3">
            <div className="row g-0">
              <div className="col-md-2">
                <img src={item.image} alt={item.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="card-body">
                  <p className="mb-1">Precio: ${item.price.toLocaleString()}</p>
                  <p className="mb-1">Cantidad: {item.quantity}</p>
                  <p className="fw-bold">Subtotal: ${(item.price * item.quantity).toLocaleString()}</p>
                  <button className="btn btn-danger btn-sm mt-2" onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary card p-4 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Total: ${getTotal().toLocaleString()}</h3>
          <div>
            <button className="btn btn-outline-danger me-2" onClick={clear}>Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart