import { useFocusEffect } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../common/shared/AppButton';
import PokemonImage from '../../common/shared/PokemonImage';
import { colors, fonts } from '../../style/style';

const likeUnlikeText = {
  like: 'like',
  unlike: 'unlike',
};

const PokemonScreen = (props) => {
  const { favouritePokemons, setFavouritePokemons } = props;
  const { pokemon, navigateBackTo } = props.route.params;
  const [buttonText, setButtonText] = useState(null);

  useEffect(() => {
    const newButtonText = favouritePokemons.includes(pokemon)
      ? likeUnlikeText.unlike
      : likeUnlikeText.like;

    setButtonText(newButtonText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.favouritePokemons]);

  useFocusEffect(() => {
    props.navigation.setOptions({
      title: pokemon.name,
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            if (navigateBackTo) {
              props.navigation.navigate(navigateBackTo);
            } else {
              props.navigation.goBack();
            }
          }}
        />
      ),
    });
  });

  const onButtonPress = () => {
    if (buttonText === likeUnlikeText.like) {
      setFavouritePokemons([pokemon, ...favouritePokemons]);
    } else {
      setFavouritePokemons(
        favouritePokemons.filter(
          (pokemonItem) => pokemonItem.name !== pokemon.name,
        ),
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <PokemonImage image={pokemon.picture} />
      <Text style={styles.description}>{pokemon.description}</Text>
      <Text style={styles.pokemonParams}>
        height: {pokemon.height} {'\n'}
        weight: {pokemon.weight} {'\n'}
        type: {pokemon.type}
      </Text>
      <View style={styles.buttonContainer}>
        <AppButton buttonText={buttonText} onPress={onButtonPress} />
      </View>
    </ScrollView>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  name: {
    marginTop: 15,
    fontFamily: fonts.boldText,
    fontSize: 33,
    textAlign: 'center',
  },
  description: {
    marginTop: 25,
    fontFamily: fonts.semiBoldText,
    fontSize: 18,
    marginHorizontal: 15,
  },
  pokemonParams: {
    marginVertical: 20,
    fontFamily: fonts.regularText,
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
