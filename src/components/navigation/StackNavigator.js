import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useFetchPokemons } from '../../common/shared/useFetchPokemons';
import PokemonScreen from '../Pokemons/PokemonScreen';
import PokemonsList from '../Pokemons/PokemonsList';

const StackNavigator = ({ favouritePokemons, setFavouritePokemons }) => {
  const Stack = createStackNavigator();
  const [pokemons, loading, error] = useFetchPokemons();

  return (
    <Stack.Navigator initialRouteName="PokemonsList">
      <Stack.Screen
        name="PokemonsList"
        options={{
          title: 'All Pokemons',
          headerTitleAlign: 'center',
        }}>
        {(props) => (
          <PokemonsList
            {...props}
            pokemons={pokemons}
            loading={loading}
            error={error}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="PokemonScreen">
        {(props) => (
          <PokemonScreen
            {...props}
            favouritePokemons={favouritePokemons}
            setFavouritePokemons={setFavouritePokemons}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
