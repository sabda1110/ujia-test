import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MyApp.InitialState = {
  data: JSON.parse(localStorage.getItem('data') as string) || []
};

const anggotaSlice = createSlice({
  name: 'anggota',
  initialState,
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
