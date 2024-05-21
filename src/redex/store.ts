import { configureStore } from '@reduxjs/toolkit';
import anggotaReducer from './slices/anggotaSlice';

const store = configureStore({
  reducer: {
    anggota: anggotaReducer
  }
});

console.log('Initi:', store.getState());

store.subscribe(() => {
  console.log('Change:', store.getState());
});

export default store;
