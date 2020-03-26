import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {StoreContext} from '../../state/store';

const DebugUpdateBox = ({ children, boxId }) => {
  const { state, actions } = useContext(StoreContext);
  const [primary, setPrimary] = useState(state.theme.inactiveColor);

  useEffect(() => {
    actions.registerElement(boxId)
  }, [])

  useEffect(() => {
    if(state.theme.activeElements[boxId]) {
      setPrimary(state.theme.activeColor);
    } else {
      setPrimary(state.theme.inactiveColor);
    }
  }, [Object.keys(state.theme.activeElements)])

  return (
    <div
      role='button'
      className='Debug_Box'
      tabIndex='0'
      onKeyDown={() => null}
      style={
        {
          backgroundColor: primary,
          border: '2px solid lightblue',
          zIndex: boxId
        }
      }
      onClick={(e) => {
        e.stopPropagation();
        actions.setActiveID(boxId)
      }
    }
    >
      { children }
    </div>
  );
}

DebugUpdateBox.propTypes = {
  boxId: PropTypes.number.isRequired,
  children: PropTypes.node,
};

DebugUpdateBox.defaultProps = {
  children: null,
};

export default DebugUpdateBox;
