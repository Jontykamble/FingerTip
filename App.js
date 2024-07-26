const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhone14 from "./screens/IPhone14";
import IPhone141 from "./screens/IPhone141";
import IPhone142 from "./screens/IPhone142";
import IPhone143 from "./screens/IPhone143";
import IPhone144 from "./screens/IPhone144";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14"
              component={IPhone14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone141"
              component={IPhone141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone142"
              component={IPhone142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone143"
              component={IPhone143}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone144"
              component={IPhone144}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
