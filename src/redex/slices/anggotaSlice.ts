import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const anggotaSlice = createSlice({
  name: 'anggota',
  initialState: {
    data: []
  },
  reducers: {
    addToAnggota: (state, action: PayloadAction<MyApp.Pegawai>) => {
      state.data.push(action.payload);
    },
    addAwal: (state, action: PayloadAction<MyApp.Pegawai[]>) => {
      state.data = action.payload;
    }
  }
});

export const { addToAnggota, addAwal } = anggotaSlice.actions;
export default anggotaSlice.reducer;
