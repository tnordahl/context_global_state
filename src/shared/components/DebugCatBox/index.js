import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {StoreContext} from '../../state/store';

const DebugCatBox = () => {
  const { state, actions } = useContext(StoreContext);

  return (
    <div
      role='button'
      className='Debug_Cat_Box'
      tabIndex='0'
      onKeyDown={() => null}
      style={{backgroundColor: 'orange'}}
      onClick={(e) => {
        e.stopPropagation();
        actions.removeCatImage();
        actions.setImageLoading(true);
        actions.updateCatImage();
      }
    }
    >
      {
        state.cats.currentCatUrl
        ? <img alt='a cat' src={state.cats.currentCatUrl}/>
        : state.cats.imageLoading ? 'loading an amazing cat' : 'you want cat!'
      }
    </div>
  );
}

DebugCatBox.propTypes = {
  children: PropTypes.node,
};

DebugCatBox.defaultProps = {
  children: null,
};

export default DebugCatBox;
