import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import FullItemScreen from "./FullItemScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Каталог" }}
        />
        <Stack.Screen
          name="FullItem"
          component={FullItemScreen}
          options={{ title: "Товар" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
