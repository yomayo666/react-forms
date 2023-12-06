import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countriesReducer from './reducers/countriesReducer';
import rootReducer from './reducers/reducers';
import IFormInput from '../components/detailsForm/interface';

// Определите типы действий и их создателей
export const SET_FORM_DATA = 'SET_FORM_DATA';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';

export interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: { image: { name: string; size: number; type: string }[] } & Omit<IFormInput, 'image'>;
}

export interface SetSelectedCountryAction {
  type: typeof SET_SELECTED_COUNTRY;
  payload: string;
}

// Объедините все типы действий в общий тип
//export type AppActionTypes = SetFormDataAction | SetSelectedCountryAction;

// Создайте корневой редуктор
const rootReducerCombined = combineReducers({
  countries: countriesReducer,
  root: rootReducer,
});

export const store = configureStore({
  reducer: rootReducerCombined,
});

// Экспортируйте типизированные функции действий
export const setFormData = (formData: SetFormDataAction['payload']): SetFormDataAction => ({
  type: SET_FORM_DATA,
  payload: formData,
});

export const setSelectedCountry = (countryId: string): SetSelectedCountryAction => ({
  type: SET_SELECTED_COUNTRY,
  payload: countryId,
});

export type RootState = ReturnType<typeof store.getState>;
