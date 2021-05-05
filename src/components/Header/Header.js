import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useStylesHeader } from './HeaderStyles';

const Header = () => {
  const classes = useStylesHeader();

  return (
    <div className={classes.header}>
      <Button variant="contained">
        <Link to="/">List</Link>
      </Button>

      <Button variant="contained">
        <Link to="/converter">Converter</Link>
      </Button>
    </div>
  );
};

export default Header;
