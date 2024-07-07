import { createSlice } from '@reduxjs/toolkit';

const operationSlice = createSlice({
  name: 'operation',
  initialState: {
    cafes: [
      {
        cafe_id: '1',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스1',
        cafe_region: '부천시 원미구',
      },
      {
        cafe_id: '2',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스2',
        cafe_region: '부천시 원미구',
      },
      {
        cafe_id: '3',
        cafe_image_path: 'https://picsum.photos/id/1/200/300',
        cafe_rep_image: true,
        cafe_name: '스타벅스3',
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

export const addCafe = operationSlice.actions.addCafe;
export const removeCafe = operationSlice.actions.removeCafe;
export default operationSlice.reducer;
