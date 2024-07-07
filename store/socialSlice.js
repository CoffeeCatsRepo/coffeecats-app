import { createSlice } from '@reduxjs/toolkit';

const socialSlice = createSlice({
  name: 'social',
  initialState: {
    following: {
      title: '팔로잉',
      screenName: 'Following',
      number: 127,
    },
    follower: {
      title: '팔로워',
      screenName: 'Follower',
      number: 0,
    },
    myreview: {
      title: '내 리뷰',
      screenName: 'MyReview',
      number: 0,
    },
    favorite: {
      title: '즐겨찾기',
      screenName: 'Favorite',
      number: 43,
    },
  },
  reducers: {
    addSocial: (state, action) => {
      const { section } = action.payload;
      if (state[section]) {
        state[section].number++;
      }
    },
    removeSocial: (state, action) => {
      const { section } = action.payload;
      if (state[section]) {
        state[section].number--;
      }
    },
  },
});

export const { addSocial, removeSocial } = socialSlice.actions;
export default socialSlice.reducer;
