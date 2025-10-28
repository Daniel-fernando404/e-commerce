import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../data/products'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
        
        fetchProducts
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.error("Error al cargar productos:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="item-list-container">
            {greeting && <h2 className="text-center my-4">{greeting}</h2>}
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