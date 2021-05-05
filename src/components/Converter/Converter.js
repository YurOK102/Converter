import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
import Input from '@material-ui/core/Input';

import { useStylesConverter } from './ConverterStyles';

import {
  getRate,
  getFirstName,
  getSecondName,
  getAllCurrencies,
} from '../../store/actions/courseActions';

const Rate = ({
  rate,
  firstName,
  getFirstName,
  secondName,
  getSecondName,
  getRate,
  allCurrencies,
  getAllCurrencies,
}) => {
  const classes = useStylesConverter();

  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const changeFirstName = (e) => {
    const neededValue = JSON.parse(e.target.value);
    getFirstName({
      currencyName: neededValue.currencyName,
      id: neededValue.id,
    });
  };

  const changeSecondName = (e) => {
    const neededValue = JSON.parse(e.target.value);
    getSecondName({
      currencyName: neededValue.currencyName,
      id: neededValue.id,
    });
  };

  useEffect((e) => {
    getAllCurrencies();
  }, []);

  const finaResult = quantity * rate[`${firstName.id}_${secondName.id}`];

  return (
    <div className={classes.converter}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <p className={classes.wrapper__title}>{firstName.currencyName}</p>

          <div className={classes.wrapper__forms}>
            <FormControl
              variant="outlined"
              className={classes.wrapper__forms_formControl}
            >
              <Select
                className={classes.wrapper__forms_formSelect}
                native
                onChange={changeFirstName}
              >
                {allCurrencies.map((item) => {
                  return (
                    <option key={item.id} value={JSON.stringify(item)}>
                      {item.id}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <form>
              <TextField
                className={classes.wrapper__forms_textField}
                variant="outlined"
                type="number"
                value={quantity}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        <div className={classes.arrow}>
          <SwapHorizOutlinedIcon />
        </div>

        <div className={classes.wrapper}>
          <p className={classes.wrapper__title}>{secondName.currencyName}</p>
          <div className={classes.wrapper__forms}>
            <FormControl
              variant="outlined"
              className={classes.wrapper__forms_formControl}
            >
              <Select
                className={classes.wrapper__forms_formSelect}
                native
                onChange={changeSecondName}
              >
                {allCurrencies.map((item) => {
                  return (
                    <option key={item.id} value={JSON.stringify(item)}>
                      {item.id}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            {!finaResult ? (
              <div className={classes.forms__results}>0</div>
            ) : (
              <div className={classes.forms__results}>{finaResult}</div>
            )}
          </div>
        </div>
      </div>

      <div className={classes.button__container}>
        <button
          className={classes.button__container_btn}
          onClick={() => {
            getRate(firstName.id, secondName.id);
          }}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rate: state.courseReducer.rate,
  allCurrencies: state.courseReducer.allCurrencies,
  firstName: state.courseReducer.firstName,
  secondName: state.courseReducer.secondName,
});

export default connect(mapStateToProps, {
  getRate,
  getFirstName,
  getSecondName,
  getAllCurrencies,
})(Rate);
