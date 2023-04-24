import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreviews from '../category-preview/category-preview.component'
import Category from '../category/category.component'

import './shop.styles.scss'

const Shop = () => {
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
