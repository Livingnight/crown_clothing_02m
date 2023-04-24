import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component'

import { CategoriesContext } from '../../contexts/categories.context'

import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <Link to={`/shop/${title}`}>
            <h2>{title}</h2>
          </Link>
          <div className='products-container'>
            {categoriesMap[title].slice(0, 4).map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  )
}

export default Shop
