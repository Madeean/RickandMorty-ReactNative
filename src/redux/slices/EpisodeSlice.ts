import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {episodeDomainUseCase} from './../../di/depedencies.ts';
import {EpisodeDetailModelDomain} from '../../domain/episode/model/EpisodeModelDomain.ts';

interface EpisodeState {
  data: EpisodeDetailModelDomain[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: EpisodeState = {
  data: null,
  loading: false,
  error: null,
};

export const getEpisodeTest = createAsyncThunk(
  'episode/getEpisodeTest',
  async () => {
    return await episodeDomainUseCase.getEpisodeTest();
  },
);

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEpisodeTest.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEpisodeTest.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getEpisodeTest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user';
    });
  },
});

export default episodeSlice.reducer;
