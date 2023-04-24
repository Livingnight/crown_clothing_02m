import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const { categoryTitle } = useParams()
  return (
    <Fragment>
      {console.log('Category Title: ', categoryTitle)}
      <h2>{categoryTitle}</h2>
      <div className='products-container'>
        {categoriesMap[categoryTitle].map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Category
