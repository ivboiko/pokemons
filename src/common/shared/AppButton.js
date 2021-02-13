import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../style/style';

const AppButton = ({ buttonText, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{buttonText}</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: colors.buttonColor,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: colors.buttonTextColor,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
