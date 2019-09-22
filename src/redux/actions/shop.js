import { CATEGORY_TYPE } from './actionTypes'

export const category = (payload, data) => ({
    category: CATEGORY_TYPE,
    payload: {
        category: data.introShop.category
      }
})
