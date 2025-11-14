import { createSlice } from '@reduxjs/toolkit';

const getInitialWishlist = () => {
  return [];
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: getInitialWishlist(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.items.find(item => item.id === product.id)) {
        state.items.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setWishlistItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlistItems } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectIsInWishlist = (productId) => (state) => {
  return state.wishlist.items.some(item => item.id === productId);
};

export default wishlistSlice.reducer;

