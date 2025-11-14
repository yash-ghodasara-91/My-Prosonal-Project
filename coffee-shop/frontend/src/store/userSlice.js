import { createSlice } from '@reduxjs/toolkit';

const getInitialUser = () => {
  const saved = localStorage.getItem('user');
  return saved ? JSON.parse(saved) : null;
};

const getInitialOrders = () => {
  const saved = localStorage.getItem('orders');
  return saved ? JSON.parse(saved) : [];
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
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    addOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: Date.now().toString(),
        date: new Date().toISOString(),
      };
      state.orders = [newOrder, ...state.orders];
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { login, logout, register, addOrder, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectOrders = (state) => state.user.orders;

export default userSlice.reducer;

