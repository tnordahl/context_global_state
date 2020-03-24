import React, { useContext } from 'react';
import { SliderPicker } from 'react-color';
import {StoreContext} from '../../state/store';

const inputStyles = {
  input: {
    border: 'none',
  },
  label: {
    fontSize: '12px',
    color: '#999',
  },
};

const ColorPicker = () => {
  const { state, actions } = useContext(StoreContext);

  return (
    <div
      className='Color-Picker'
      style={{backgroundColor: state.theme.activeColor, border: `1px solid pink`}}
    >
      <SliderPicker
        style={ inputStyles }
        color={ state.theme.activeColor }
        onChange={
          (color) => {
            actions.setBackgroundColor(color.hex)
          }
        }
      />
    </div>
  );
}

export default ColorPicker;
