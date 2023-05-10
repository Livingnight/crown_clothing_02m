import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCategoriesStart } from '../../store/category/category.action'

import CategoryPreviews from '../category-preview/category-preview.component'
import Category from '../category/category.component'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

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
