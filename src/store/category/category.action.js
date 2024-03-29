import { createAction } from '../../utils/reducer/reducer.util'
import { CATEGORY_ACTION_TYPES } from './category.types'

export const setCategories = categoriesArray =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, categoriesArray)
