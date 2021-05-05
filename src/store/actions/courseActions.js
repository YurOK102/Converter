import axios from 'axios';

import * as actions from './index';

export const getCourse = () => async (dispatch) => {
  const res = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

  const arrCourse = Object.values(res.data.Valute);

  // dispatch({ type: actions.GET_COURS, objCourse: res.data.Valute });
  dispatch({ type: actions.TOGGLE_COURCE, course: arrCourse });
};

export const getAllCurrencies = () => async (dispatch) => {
  const apiKey1 = '212760b46dc06eab54b9';
  const apiKey2 = '5a49beefa5e7696bc287';
  const apiKey3 = '9380f0e3d56890645859';

  const res = await axios.get(
    `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey1}`
  );

  const arrCurrencies = Object.values(res.data.results);

  // dispatch({
  //   type: actions.GET_ALLCURRENCIES,
  //   objAllCurrencies: res.data.results,
  // });
  dispatch({
    type: actions.TOGGLE_ALLCURRENCIES,
    allCurrencies: arrCurrencies,
  });
};

export const getRate = (firstName, secondName) => async (dispatch) => {
  const apiKey1 = '212760b46dc06eab54b9';
  const apiKey2 = '5a49beefa5e7696bc287';
  const apiKey3 = '9380f0e3d56890645859';

  const res = await axios.get(
    `https://free.currconv.com/api/v7/convert?q=${firstName}_${secondName}&compact=ultra&apiKey=${apiKey2}`
  );

  dispatch({ type: actions.GET_RATE, rate: res.data });
};

export const getFirstName = (data) => ({
  type: actions.GET_FIRSTNAME,
  data,
});

export const getSecondName = (data) => ({
  type: actions.GET_SECONDNAME,
  data,
});
