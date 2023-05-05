import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setCategories } from '../../store/category/category.action'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import CategoryPreviews from '../category-preview/category-preview.component'
import Category from '../category/category.component'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
  }, [dispatch])

  return (
    <Routes>
      <Route
        index
        element={<CategoryPreviews />}
      />
      <Route
        path=':category'
        element={<Category />}
      />
    </Routes>
  )
}

export default Shop
