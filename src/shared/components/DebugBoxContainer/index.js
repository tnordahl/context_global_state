import React, { useMemo } from 'react';
import ThemedButton from '../ThemedButton';
import DebugUpdateBox from '../DebugUpdateBox';
import DebugCatBox from '../DebugCatBox';
import ColorPicker from '../ColorPicker';
import { StoreContext } from '../../state/store';


class DebugBoxContainer extends React.Component {
  componentDidMount() {
    const value = this.context;
    console.log('state available in class components:', value);
  }

  render() {
    const Box0 = <ColorPicker />;
    const Box1 = <DebugCatBox />;

    return (
      <div className={`App`} style={{backgroundColor: this.context.state.theme.activeColor}}>
        {Box0}
        {Box1}

        <DebugUpdateBox boxId={0}>
          <DebugUpdateBox boxId={1}>
            <DebugUpdateBox boxId={2}>
              <DebugUpdateBox boxId={3}>
                <ThemedButton />
              </DebugUpdateBox>
            </DebugUpdateBox>
          </DebugUpdateBox>
        </DebugUpdateBox>
      </div>
    );
  }
}

DebugBoxContainer.contextType = StoreContext;

export default DebugBoxContainer;
