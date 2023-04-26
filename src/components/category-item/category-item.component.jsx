import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from './category-item.styles'

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category

  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
