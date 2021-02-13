import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../../style/style';
import PokemonItem from './PokemonItem';

const PokemonsList = ({
  navigation,
  pokemons,
  loading,
  error,
  navigateBackTo,
  renderListHeader,
}) => {
  const renderPokemon = (pokemon) => {
    return (
      <PokemonItem
        pokemon={pokemon}
        navigation={navigation}
        navigateBackTo={navigateBackTo}
      />
    );
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} color="#00ff00" size="large" />
    );
  }

  if (error) {
    Alert.alert('Cannot fetch pokemons :(');
  }

  return (
    <FlatList
      style={styles.list}
      data={pokemons}
      initialNumToRender={2}
      renderItem={renderPokemon}
      keyExtractor={(_, index) => String(index)}
      ItemSeparatorComponent={renderItemSeparator}
      ListHeaderComponent={renderListHeader ? renderListHeader : null}
    />
  );
};

export default PokemonsList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingBottom: 30,
  },
  loader: {
    flex: 1,
  },
  itemSeparator: {
    height: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: colors.itemSeparatorColor,
  },
});
