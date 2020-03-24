import { hot } from 'react-hot-loader/root';
import React from 'react';
import DebugBoxContainer from "./components/DebugBoxContainer";
import { StoreProvider } from './state/store';

const App = () => {
  return (
    <StoreProvider>
      <DebugBoxContainer />
    </StoreProvider>

  );
}

export default hot(App);
