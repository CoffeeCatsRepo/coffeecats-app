import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Notice = () => {
  const navigation = useNavigation();

  const navigateToNotice = () => {
    navigation.navigate('NoticeScreen');
  };

  const navigateToPrivacy = () => {
    navigation.navigate('PrivacyScreen');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToNotice} style={styles.textContainer}>
        <Text>공지사항</Text>
      </Pressable>
      <Pressable onPress={navigateToPrivacy} style={styles.textContainer}>
        <Text>개인정보 처리방침</Text>
      </Pressable>
    </View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 40,
  },
  textContainer: {
    margin: 22,
  },
});
