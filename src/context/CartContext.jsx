import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => cart.some(p => p.id === id)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p))
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const removeItem = (id) => setCart(cart.filter(p => p.id !== id))
  const clear = () => setCart([])
  const getTotalQuantity = () => cart.reduce((acc, p) => acc + p.quantity, 0)
  const getTotal = () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getTotalQuantity,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}