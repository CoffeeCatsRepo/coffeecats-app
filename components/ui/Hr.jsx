import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constans/colors';

const Hr = ({ style }) => {
  return (
    <View style={styles.root}>
      <View style={[styles.horizontalLine, style]} />
    </View>
  );
};

export default Hr;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 3,
    marginVertical: 15,
    width: '90%',
  },
});
