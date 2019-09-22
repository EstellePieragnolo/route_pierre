import { CATEGORY_TYPE } from "./actionTypes";

export const category = category => ({
  type: CATEGORY_TYPE,
  playload: {
    category: category
  }
});
