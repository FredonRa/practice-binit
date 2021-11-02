import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import GlobalNavigation from "./src/navigation/GlobalNavigation";

import { Provider } from "react-redux";

import { store } from "./src/redux/store";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalNavigation />
      </NavigationContainer>
    </Provider>
  );
}
