import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPurchases: false,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    togglePurchases: s => {
      s.showPurchases = !s.showPurchases;
    },
  },
});

export const { togglePurchases } = UserReducer.actions;
export default UserReducer.reducer;
