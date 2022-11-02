import './categories.styles.scss'
import Category from './category-item.component'

export default function Categories(props) {
	const { categories } = props
	return (
		<div className='categories-container'>
			{categories.map(category => (
				<Category
					key={category.id}
					category={category}
				/>
			))}
		</div>
	)
}
