import * as actions from '../actions/index';

const initialState = {
  // objCourse: {},
  course: [],
  // objAllCurrencies: {},
  allCurrencies: [],
  rate: [],
  // firstName: '',
  // secondName: 'Albanian Lek',
  firstName: { currencyName: 'Albanian Lek', id: 'ALL' },
  secondName: { currencyName: 'Albanian Lek', id: 'ALL' },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COURS:
      return { ...state, objCourse: action.objCourse };

    case actions.TOGGLE_COURCE:
      return { ...state, course: action.course };

    case actions.GET_ALLCURRENCIES:
      return { ...state, objAllCurrencies: action.objAllCurrencies };

    case actions.TOGGLE_ALLCURRENCIES:
      return { ...state, allCurrencies: action.allCurrencies };

    case actions.GET_RATE:
      return { ...state, rate: action.rate };

    case actions.GET_FIRSTNAME:
      return { ...state, firstName: action.data };

    case actions.GET_SECONDNAME:
      return { ...state, secondName: action.data };

    default:
      return state;
  }
};
