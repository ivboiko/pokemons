import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../style/style';

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
    fontFamily: fonts.semiBoldText,
    color: colors.buttonTextColor,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
