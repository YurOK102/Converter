/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles(() => ({
  header: {
    width: '600px',
    height: '50px',
    margin: '0 auto',
    backgroundColor: '#00BFFF',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
}));
