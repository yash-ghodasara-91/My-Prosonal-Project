import { createSlice } from '@reduxjs/toolkit';

const getInitialUser = () => {
  return null;
};

const getInitialOrders = () => {
  return [];
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getInitialUser(),
    orders: getInitialOrders(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    addOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: Date.now().toString(),
        date: new Date().toISOString(),
      };
      state.orders = [newOrder, ...state.orders];
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, register, addOrder, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectOrders = (state) => state.user.orders;

export default userSlice.reducer;

