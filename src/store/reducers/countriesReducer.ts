import { SetSelectedCountryAction} from '../store';
interface Country {
  id: string;
  name: string;
}

const initialState: Country[] = [
  { id: '1', name: 'Russia' },
  { id: '2', name: 'Ukraine' },
  { id: '3', name: 'Belarus' },
  { id: '4', name: 'Kazakhstan' },
];

const countriesReducer = (state = initialState, action: SetSelectedCountryAction) => {
  switch (action.type) {
    case 'SET_SELECTED_COUNTRY':
      const selectedCountry = state.find((country) => country.id === action.payload);
      return selectedCountry ? [selectedCountry] : state;

    default:
      return state;
  }
};

export default countriesReducer;
