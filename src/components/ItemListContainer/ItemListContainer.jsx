import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts, fetchProductsByCategory } from '../../services/products'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const promise = categoryId ? fetchProductsByCategory(categoryId) : fetchProducts()
    promise
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className="item-list-container">
      {greeting && !categoryId && <h2 className="text-center my-4">{greeting}</h2>}
      {categoryId && (
        <h3 className="text-center mb-4">
          {categoryId === 'deportiva' ? 'Ropa Deportiva' : 'Ropa Casual'}
        </h3>
      )}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer