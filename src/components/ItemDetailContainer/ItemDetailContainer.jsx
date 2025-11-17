import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../services/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!product) return <h2 className="text-center my-5">Producto no encontrado</h2>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer