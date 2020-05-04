import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Text} from 'react-native'

//importar o Stack

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Text>...</Text>
    </PersistGate>
  </Provider>
)