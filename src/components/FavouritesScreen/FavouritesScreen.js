import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../style/style';
import PokemonsList from '../Pokemons/PokemonsList';

const FavouritesScreen = ({ favouritePokemons, navigation }) => {
  if (favouritePokemons.length === 0) {
    return (
      <View style={styles.noPokemonsLabelContainer}>
        <Text style={styles.noPokemonsLabel}>
          There are not favourite pokemons
        </Text>
      </View>
    );
  }

  const renderListHeader = () => (
    <Text style={styles.favouritesLabel}>Favourites</Text>
  );

  return (
    <View style={styles.pokemonsContainer}>
      <PokemonsList
        navigation={navigation}
        pokemons={favouritePokemons}
        loading={false}
        error={false}
        navigateBackTo="FavouritesScreen"
        renderListHeader={renderListHeader}
      />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  noPokemonsLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPokemonsLabel: {
    marginHorizontal: 15,
    fontFamily: fonts.boldText,
    fontSize: 20,
    textAlign: 'center',
  },
  favouritesLabel: {
    fontFamily: fonts.boldText,
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 15,
  },
  pokemonsContainer: {
    flex: 1,
  },
});
