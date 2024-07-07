import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CafeCard = ({ imageUri, name, address }) => {
  return (
    <View style={styles.root}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} resizeMode="cover" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginVertical: 10,
  },
  mainContainer: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    margin: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
});

export default CafeCard;
