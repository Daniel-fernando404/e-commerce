import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProductById(id)
            .then(data => {
                setProduct(data)
            })
            .catch(error => {
                console.error("Error al cargar el producto:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div className="item-detail-container">
            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : product ? (
                <ItemDetail product={product} />
            ) : (
                <h2 className="text-center my-5">Producto no encontrado</h2>
            )}
        </div>
    )
}

export default ItemDetailContainer