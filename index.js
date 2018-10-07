import React from "react";
import { AppRegistry, View, AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from 'redux-persist/lib/storage';

import App from "./app/components/App";
import { reducer } from "./app/reducers/todoListRedux";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

// Import the App container component

// Pass the store into the Provider
const AppWithStore = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent("Taskify", () => AppWithStore);
