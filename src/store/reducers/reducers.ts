import { SetFormDataAction, SET_FORM_DATA } from '../store'; 



const rootReducer = (state = {}, action: SetFormDataAction) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default rootReducer;
