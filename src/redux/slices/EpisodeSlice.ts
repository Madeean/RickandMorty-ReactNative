import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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

export const getEpisode = createAsyncThunk(
  'episode/getEpisodeTest',
  async (page: number) => {
    return await episodeDomainUseCase.getEpisode(page);
  },
);

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEpisode.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEpisode.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getEpisode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user';
    });
  },
});

export default episodeSlice.reducer;
