import React from 'react';
import { useSelector } from 'react-redux';
import GridBox from '../ui/GridBox2x2';

const Activity = () => {
  // Redux 스토어의 social 상태 가져오기
  const { following, follower, myreview, favorite } = useSelector((state) => state.social);

  // GridBox 컴포넌트에 전달할 데이터 준비
  const data = [
    { title: following.title, screenName: following.screenName, number: following.number },
    { title: follower.title, screenName: follower.screenName, number: follower.number },
    { title: myreview.title, screenName: myreview.screenName, number: myreview.number },
    { title: favorite.title, screenName: favorite.screenName, number: favorite.number },
  ];

  return <GridBox data={data} />;
};

export default Activity;
