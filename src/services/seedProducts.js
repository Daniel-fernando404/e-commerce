// Ejecutar SOLO una vez (importar y llamar seedProducts en un useEffect temporal)
import { writeBatch, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

// Datos originales (puedes eliminar después)
const seedData = [
  { id: 1, name: "Remera Deportiva Nike", price: 12500, description: "Remera deportiva de alta calidad, ideal para entrenar. Tela transpirable.", category: "deportiva", image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8451480a/products/NI_DD1992-010/NI_DD1992-010-1.JPG", stock: 10 },
  { id: 2, name: "Short Adidas Running", price: 9800, description: "Short liviano para correr. Material de secado rápido.", category: "deportiva", image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2770bb78b20e4ec6972c5f4aae743ab8_9366/Shorts_Own_the_Run_Negro_IX6371_01_laydown.jpg", stock: 8 },
  { id: 3, name: "Calza Deportiva Puma", price: 11200, description: "Calza deportiva con tecnología Dry-Cell para máxima comodidad.", category: "deportiva", image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfed46f62/products/PU_851779-01/PU_851779-01-1.JPG", stock: 15 },
  { id: 4, name: "Buzo Deportivo Under Armour", price: 18500, description: "Buzo con capucha, perfecto para entrenamientos en clima frío.", category: "deportiva", image: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7fdb72eb/products/UA_1328703-001/UA_1328703-001-1.JPG", stock: 6 },
  { id: 5, name: "Camisa Jean Levi's", price: 15300, description: "Camisa de jean clásica, perfecta para salidas casuales.", category: "casual", image: "https://lavaindumentaria.com.ar/wp-content/uploads/2021/04/Sin-titulo-1ewe.jpg", stock: 12 },
  { id: 6, name: "Pantalón Chino Dockers", price: 13800, description: "Pantalón chino cómodo y versátil para uso diario.", category: "casual", image: "https://publicdockersmx.blob.core.windows.net/files/plp-esenciales/Dockers_PLP_Esenciales_StripDockers_PLP_EsencialesStrip_Mobile_ST.png", stock: 9 },
  { id: 7, name: "Remera Lisa Básica", price: 5500, description: "Remera 100% algodón, disponible en varios colores.", category: "casual", image: "https://briganti.com.ar/cdn/shop/files/HXIM09525081_8451b7f6-b603-4487-987c-6663c77af4ec_800x.jpg?v=1705931947", stock: 20 },
  { id: 8, name: "Sweater Cuello Redondo", price: 14200, description: "Sweater de lana suave, ideal para el invierno.", category: "casual", image: "https://http2.mlstatic.com/D_NQ_NP_705398-MLA79168268955_092024-O.webp", stock: 7 }
]

export const seedProducts = async () => {
  const batch = writeBatch(db)
  seedData.forEach(p => {
    const ref = doc(db, 'products', String(p.id)) // el ID del doc = id del producto
    batch.set(ref, {
      name: p.name,
      price: p.price,
      description: p.description,
      category: p.category,
      image: p.image,
      stock: p.stock
    })
  })
  await batch.commit()
  console.log('Seed productos: OK')
}