import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {episodeDomainUseCase} from './../../di/depedencies.ts';
import {EpisodeDetailModelDomain} from '../../domain/episode/model/EpisodeModelDomain.ts';

interface EpisodeState {
  data: EpisodeDetailModelDomain[];
  loading: boolean;
  error: string | null | undefined;
  page: number;
  status: string;
}

const initialState: EpisodeState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  status: 'idle',
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
    builder
      .addCase(getEpisode.pending, state => {
        state.status = 'loading';
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = [...state.data, ...action.payload];
        state.page += 1;
      })
      .addCase(getEpisode.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default episodeSlice.reducer;
