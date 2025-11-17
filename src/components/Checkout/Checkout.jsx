import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useCart } from '../../context/CartContext'

const Checkout = () => {
  const { cart, getTotal, clear } = useCart()
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.email || !buyer.phone) return
    setLoading(true)
    try {
      const order = {
        buyer,
        items: cart.map(i => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity
        })),
        total: getTotal(),
        createdAt: serverTimestamp()
      }
      const colRef = collection(db, 'orders')
      const docRef = await addDoc(colRef, order)
      setOrderId(docRef.id)
      clear()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="container my-5 text-center">
        <h2>Compra confirmada</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Gracias por tu compra.</p>
      </div>
    )
  }

  if (!cart.length) {
    return (
      <div className="container my-5 text-center">
        <h2>Carrito vacío</h2>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Nombre</label>
          <input name="name" className="form-control" value={buyer.name} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" value={buyer.email} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Teléfono</label>
          <input name="phone" className="form-control" value={buyer.phone} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <button className="btn btn-success" disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar compra'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout