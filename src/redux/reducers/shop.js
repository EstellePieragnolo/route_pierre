import { CATEGORY_TYPE } from '../actions/actionTypes'

const initialState = {
  category: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPE: {
      return {
        ...state,
        category: action.category
      }
    }
    default:
      return {
        ...state
      }
  }
}