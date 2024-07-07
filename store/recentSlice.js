import { createSlice } from '@reduxjs/toolkit';

const recentSlice = createSlice({
  name: 'recent',
  initialState: {
    cafes: [
      {
        cafe_id: '4',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스4',
        cafe_region: '부천시 원미구',
      },
      {
        cafe_id: '5',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스5',
        cafe_region: '부천시 원미구',
      },
      {
        cafe_id: '6',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스6',
        cafe_region: '부천시 원미구',
      },
    ],
  },
  reducers: {
    addCafe: (state, action) => {
      state.cafes.push(action.payload.id);
    },
    removeCafe: (state, action) => {
      state.cafes.splice(state.cafes.indexOf(action.payload.id), 1);
    },
  },
});

export const addCafe = recentSlice.actions.addCafe;
export const removeCafe = recentSlice.actions.removeCafe;
export default recentSlice.reducer;
