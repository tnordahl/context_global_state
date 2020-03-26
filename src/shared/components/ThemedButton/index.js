import React, { useEffect, useState, useContext } from 'react';
import {StoreContext} from '../../state/store';

const ThemedButton = () => {
  const { state, actions } = useContext(StoreContext);
  const [primary, setPrimary] = useState(state.theme.inactiveColor);
  const [all, setAll] = useState(false);

  useEffect(() => {

    const allChecked = Object.values(state.theme.activeElements).every( (val, i, arr) => val === true );

    if(allChecked) {
      setPrimary(state.theme.activeColor);
    } else {
      setPrimary(state.theme.inactiveColor);
    }

    setAll(allChecked);

  }, [Object.keys(state.theme.activeElements)])

  return (
    <button
      type='button'
      style={{ backgroundColor: primary, color: 'white' }}
      onClick={(e) => {
        e.stopPropagation();
        actions.setActiveID('all')
      }}
    >
      {
        all
        ? 'All inactive!'
        : 'All active!'
      }
    </button>
  );
};

export default ThemedButton;
