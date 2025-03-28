import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import SplashScreen from '../screens/SplashScreen';
import DetailScreen from '../screens/DetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
