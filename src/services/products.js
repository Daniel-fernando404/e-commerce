import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const fetchProducts = async () => {
  const snap = await getDocs(collection(db, 'products'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const fetchProductsByCategory = async (categoryId) => {
  const q = query(collection(db, 'products'), where('category', '==', categoryId))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const fetchProductById = async (id) => {
  const snap = await getDoc(doc(db, 'products', String(id)))
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}