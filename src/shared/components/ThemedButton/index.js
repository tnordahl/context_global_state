import React, { useEffect, useState, useContext } from 'react';
import {StoreContext} from '../../state/store';

const ThemedButton = () => {
  const { state, actions } = useContext(StoreContext);
  const [primary, setPrimary] = useState(state.theme.inactiveColor);

  useEffect(() => {
    if(state.theme.activeElements.all) {
      setPrimary(state.theme.activeColor);
    } else {
      setPrimary(state.theme.inactiveColor);
    }

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
        state.theme.activeElements.all
        ? 'All inactive!'
        : 'All active!'
      }
    </button>
  );
};

export default ThemedButton;
