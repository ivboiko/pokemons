import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { imageSize } from '../../style/style';
import { getImage } from '../utils/getImage';

const PokemonImage = ({ image }) => (
  <View style={styles.photoContainer}>
    <Image style={styles.photo} source={getImage(image)} />
  </View>
);

export default PokemonImage;

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  photo: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'stretch',
  },
});
