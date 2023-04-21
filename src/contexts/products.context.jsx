import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => { },
  categories: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    // getCollectionAndDocuments()
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      console.log(categoriesMap)
      let productArray = []
      let categoryArray = []
      for ( let category in categoriesMap) {
        categoryArray.push(category)
        categoriesMap[category].forEach(item => {
          // console.log(item.imageUrl)
          productArray.push(item)
        })
      }
      setCategories(categoryArray)
      setProducts(productArray)
    }
    getCategoriesMap()
  }, [])

  const value = { products, setProducts }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
