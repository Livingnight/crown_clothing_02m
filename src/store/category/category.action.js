import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { createAction } from '../../utils/reducer/reducer.util'
import { CATEGORY_ACTION_TYPES } from './category.types'

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = categoriesArray =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, categoriesArray)

export const fetchCategoriesFailed = error =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesStartAsync = () => {
  return async dispatch => {
    dispatch(fetchCategoriesStart())
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
      dispatch(fetchCategoriesFailed(error))
    }
  }
}
