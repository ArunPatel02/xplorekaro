import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
import SearchModel from './SearchModel';

export default function SwipeableTemporaryDrawer({anchor , state , setState}) {

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };


  return (
    <div>
          <SwipeableDrawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <SearchModel setState={setState}/>
          </SwipeableDrawer>
    </div>
  );
}