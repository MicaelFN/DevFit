import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
//import {Text} from 'react-native';
import MainStack from './src/navigators/MainStack';

//importar o Stack


export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainStack />
    </PersistGate>
  </Provider>
)