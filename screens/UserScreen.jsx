import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import User from '../components/ui/User';
import CustomButton from '../components/ui/CustomButton';
import Hr from '../components/ui/Hr';
import Activity from '../components/user/Activity';
import Operation from '../components/cafe/Operation';
import Recent from '../components/cafe/Recent';
import { useSelector } from 'react-redux';
import Notice from '../components/Notice';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useScrollToTop } from '@react-navigation/native';

const UserScreen = ({ navigation }) => {
  const scrollViewRef = useRef(null);

  useScrollToTop(scrollViewRef);

  const editInfoHandler = () => {
    navigation.navigate('EditUserScreen');
  };

  const addCafeHandler = () => {
    console.log('추가하기 버튼');
  };

  const operationCafes = useSelector((state) => state.operationCafe.cafes);
  const recentCafes = useSelector((state) => state.recentCafe.cafes);

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container} contentContainerStyle={styles.contentContainer}>
      <User imageUri={'https://picsum.photos/id/1/200/300'} nickname="닉네임" email="email@example.com" />
      <CustomButton onPress={editInfoHandler}>정보수정</CustomButton>
      <Hr />
      <Activity />
      <Hr />
      <Operation
        title="운영중인 카페"
        Button={{ onPress: addCafeHandler, children: '추가하기' }}
        cafes={operationCafes}
      />
      <Hr />
      <Recent title="최근 방문한 카페" cafes={recentCafes} />
      <Notice />
      <ScrollToTopButton onPress={handleScrollToTop} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default UserScreen;
