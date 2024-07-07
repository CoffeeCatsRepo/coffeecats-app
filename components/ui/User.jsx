import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const User = ({ imageUri, nickname, email }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
      <Text style={styles.nickname}>{nickname}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  root: {
    marginTop: 32,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    width: 100, // 정해진 폭
    height: 100, // 정해진 높이
    borderRadius: 75, // 반지름 값 설정 (폭과 높이의 절반)
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nickname: {
    fontSize: 22,
    fontWeight: 'semibold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
  },
});
