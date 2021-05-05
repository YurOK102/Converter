/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesList = makeStyles(() => ({
  list: {
    width: '800px',
    height: '500px',
    margin: '0 auto',
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px',
    margin: '5px',
  },
  title: {
    fontSize: '12px',
    color: '#848484',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  wrapper__currency: {
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  wrapper__currency_name_1: {
    width: '90px',
    textAlign: 'center',
  },
  wrapper__currency_name_2: {
    width: '150px',
    textAlign: 'center',
  },
  indexing: {
    width: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indexing__text_up: {
    width: '70px',
    color: '#4caf50',
  },
  indexing__text_down: {
    width: '70px',
    color: '#f44336',
  },
}));
