import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ product }) => {
    return (
        <div className="card item-card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text item-price">${product.price.toLocaleString()}</p>
                <p className="card-text text-muted">{product.description.substring(0, 60)}...</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary w-100">
                    Ver detalles
                </Link>
            </div>
        </div>
    )
}

export default Item