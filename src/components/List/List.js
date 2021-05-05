import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { green, red } from '@material-ui/core/colors';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import { useStylesList } from './ListStyles';
import { getCourse } from '../../store/actions/courseActions';

function List({ getCourse, course }) {
  const classes = useStylesList();

  useEffect(() => {
    getCourse();
  }, []);

  console.log(course);

  return (
    <div className={classes.list}>
      {course.map((item) => {
        const indication = (item.Value - item.Previous)
          .toFixed(4)
          .replace('.', ',');

        return (
          <div key={item.ID} className={classes.container}>
            <p className={classes.title}>{item.Name}</p>

            <div className={classes.wrapper}>
              <div className={classes.wrapper__currency}>
                <div className={classes.wrapper__currency_name_1}>
                  {item.Nominal} {item.CharCode}
                </div>
                <SwapHorizIcon fontSize="small" />
                <div className={classes.wrapper__currency_name_2}>
                  {item.Value}
                </div>
              </div>

              {item.Value >= item.Previous ? (
                <div className={classes.indexing}>
                  <ArrowUpwardOutlinedIcon
                    style={{ color: green[500] }}
                    fontSize="small"
                  />
                  <p className={classes.indexing__text_up}>{indication}</p>
                </div>
              ) : (
                <div className={classes.indexing}>
                  <ArrowDownwardOutlinedIcon
                    style={{ color: red[500] }}
                    fontSize="small"
                  />
                  <p className={classes.indexing__text_down}>{indication}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  course: state.courseReducer.course,
});

export default connect(mapStateToProps, { getCourse })(List);
