import AppContants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addItem(item) {
    dispatch({
      actionType: AppContants.ADD_ITEM, item
    });
  },
  removeItem(item) {
    dispatch({
      actionType: AppContants.REMOVE_ITEM, item
    });
  },
  increaseItem(item) {
    dispatch({
      actionType: AppContants.INCREASE_ITEM, item
    });
  },
  decreaseItem(item) {
    dispatch({
      actionType: AppContants.DECREASE_ITEM, item
    });
  }
};
