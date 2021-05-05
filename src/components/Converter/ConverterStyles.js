/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesConverter = makeStyles(() => ({
  converter: {
    width: '900px',
    height: '500px',
    margin: '0 auto',
  },
  container: {
    width: '100%',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    width: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  },
  wrapper__title: {
    fontSize: '12px',
    color: '#848484',
  },
  wrapper__forms: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  wrapper__forms_formControl: {
    width: '100px',
  },
  wrapper__forms_formSelect: {
    height: '56px',
  },

  forms__results: {
    width: '218px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
    padding: '18.5px 14px',
  },
  selectEmpty: {},
  textField: {
    padding: 0,
  },
  arrow: {
    width: '50px',
    height: ' 50px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__container_btn: {
    width: '150px',
    borderRadius: '10px',
    padding: '10px',
  },
}));
