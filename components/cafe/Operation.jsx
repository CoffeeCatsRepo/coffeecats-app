import React from 'react';
import CafeList from './CafeList';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../ui/CustomButton';

const Operation = (props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.fontsize}>운영중인 카페</Text>
        <CustomButton style={styles.fontsize}>추가하기</CustomButton>
      </View>
      <CafeList {...props} />
    </View>
  );
};

export default Operation;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  fontsize: {
    fontSize: 18,
  },
});
