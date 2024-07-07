import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GridBox = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    if (screenName === 'Favorite') {
      navigation.navigate('FavoriteScreen');
    } else {
      navigation.navigate('ActivityOverview', { screen: screenName });
    }
  };

  // 데이터를 2개의 섹션으로 나누기
  const sectionData = [
    data.slice(0, 2), // 첫 번째 섹션에 포함할 항목
    data.slice(2, 4), // 두 번째 섹션에 포함할 항목
  ];

  return (
    <View style={styles.root}>
      {sectionData.map((section, sectionIndex) => (
        <View style={styles.section} key={sectionIndex}>
          {section.map((item, itemIndex) => (
            <TouchableOpacity
              style={styles.subSection}
              key={itemIndex}
              onPress={() => handleNavigation(item.screenName)}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.number}>{item.number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default GridBox;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // 각 행 사이에 여백을 추가
  },
  subSection: {
    flex: 1, // 각 항목을 같은 너비로 설정
    alignItems: 'center', // 가운데 정렬
  },
  title: {
    fontSize: 18,
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
