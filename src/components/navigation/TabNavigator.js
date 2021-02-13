import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavouritesScreen from '../FavouritesScreen/FavouritesScreen';
import StackNavigator from './StackNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const [favouritePokemons, setFavouritePokemons] = useState([]);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MainScreen') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'FavouritesScreen') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
        }}>
        <Tab.Screen name="MainScreen">
          {() => (
            <StackNavigator
              favouritePokemons={favouritePokemons}
              setFavouritePokemons={setFavouritePokemons}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="FavouritesScreen">
          {({ navigation }) => (
            <FavouritesScreen
              favouritePokemons={favouritePokemons}
              navigation={navigation}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
