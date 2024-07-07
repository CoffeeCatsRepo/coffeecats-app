import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import RecentScreen from './screens/RecentScreen';
import UserScreen from './screens/UserScreen';
import EditUserScreen from './screens/EditUserScreen';
import EditCafeScreen from './screens/EditCafeScreen';
import Following from './screens/Following';
import Follower from './screens/Follower';
import MyReview from './screens/MyReview';
import { store } from './store/store';
import NoticeScreen from './screens/NoticeScreen';
import PrivacyScreen from './screens/PrivacyScreen';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ActivityOverview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="Follower" component={Follower} />
      <Stack.Screen name="MyReview" component={MyReview} />
    </Stack.Navigator>
  );
};

const UserOverview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: '내 정보',
        }}
      />
      <Stack.Screen name="EditUserScreen" component={EditUserScreen} />
      <Stack.Screen name="EditCafeScreen" component={EditCafeScreen} />
      <Stack.Screen name="ActivityOverview" component={ActivityOverview} options={{ headerShown: false }} />
      <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
      <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name="map" size={size} color={color} />
                ) : (
                  <Ionicons name="map-outline" size={size} color={color} />
                ),
              title: '홈',
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name="FavoriteScreen"
            component={FavoriteScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name="star" size={size} color={color} />
                ) : (
                  <Ionicons name="star-outline" size={size} color={color} />
                ),
              title: '즐겨 찾기',
            }}
          />
          <BottomTab.Screen
            name="RecentScreen"
            component={RecentScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name="timer" size={size} color={color} />
                ) : (
                  <Ionicons name="timer-outline" size={size} color={color} />
                ),
              title: '최근 방문',
            }}
          />
          <BottomTab.Screen
            name="UserOverview"
            component={UserOverview}
            options={{
              tabBarIcon: ({ focused, size, color }) =>
                focused ? (
                  <Ionicons name="people" size={size} color={color} />
                ) : (
                  <Ionicons name="people-outline" size={size} color={color} />
                ),
              title: '내 정보',
              headerShown: false,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
