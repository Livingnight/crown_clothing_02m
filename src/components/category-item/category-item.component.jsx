import { Link } from 'react-router-dom'
import { BackgroundImage, Body, CategoryItemContainer } from './category-item.styles'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <CategoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <Link to={`/shop/${title}`}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
