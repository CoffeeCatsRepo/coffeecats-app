import React from 'react';
import CafeList from './CafeList';
import { StyleSheet, Text, View } from 'react-native';

const Recent = (props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>최근 방문한 카페</Text>
      </View>
      <CafeList {...props} />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
  },
});
