import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CafeCard from './CafeCard';
import CustomButton from '../ui/CustomButton';
import { Ionicons } from '@expo/vector-icons';

const CafeList = ({ title, cafes }) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggleList = () => {
    setIsExpand(!isExpand);
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.section}>
          {cafes.length > 0 ? (
            isExpand ? (
              cafes.map((item) => (
                <CafeCard
                  key={item.cafe_id}
                  imageUri={item.cafe_image_path}
                  name={item.cafe_name}
                  address={item.cafe_region}
                />
              ))
            ) : (
              <CafeCard
                key={cafes[0].cafe_id}
                imageUri={cafes[0].cafe_image_path}
                name={cafes[0].cafe_name}
                address={cafes[0].cafe_region}
              />
            )
          ) : (
            <Text style={styles.emptyText}>카페가 없습니다.</Text>
          )}
        </View>
        {cafes.length > 2 && (
          <CustomButton style={styles.toggleButton} onPress={toggleList}>
            {isExpand ? (
              <Ionicons name="arrow-up" size={24} color="black" />
            ) : (
              <Ionicons name="arrow-down" size={24} color="black" />
            )}
          </CustomButton>
        )}
      </View>
    </View>
  );
};

export default CafeList;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginVertical: 10,
  },
  container: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: 'grey',
  },
  toggleButton: {
    alignItems: 'center',
  },
});
