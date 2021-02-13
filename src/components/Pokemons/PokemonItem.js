import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PokemonImage from '../../common/shared/PokemonImage';
import { fonts } from '../../style/style';

const PokemonItem = memo(({ pokemon, navigation, navigateBackTo }) => {
  const navigateToPokemonScreen = () => {
    navigation.navigate('PokemonScreen', {
      pokemon: pokemon.item,
      navigateBackTo,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={navigateToPokemonScreen}>
      <PokemonImage image={pokemon.item.picture} />
      <View style={styles.pokemonDescriptionContainer}>
        <Text style={styles.name}>{pokemon.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default PokemonItem;

const styles = StyleSheet.create({
  pokemonDescriptionContainer: {
    paddingVertical: 5,
  },
  name: {
    fontSize: 30,
    fontFamily: fonts.boldText,
    textAlign: 'center',
  },
});
