import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {episodeDomainUseCase} from './../../di/depedencies.ts';
import {EpisodeDetailModelDomain} from '../../domain/episode/model/EpisodeModelDomain.ts';

interface EpisodeState {
  data: EpisodeDetailModelDomain[];
  loading: boolean;
  error: string | null | undefined;
  page: number;
  status: string;
  searchText: string;
  hasMore: boolean; // Tambahkan flag hasMore
}

type getEpisodeParameters = {
  page: number;
  episode: string;
};

const initialState: EpisodeState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  status: 'idle',
  searchText: '',
  hasMore: true, // Tambahkan hasMore ke initialState
};

export const getEpisode = createAsyncThunk(
  'episode/getEpisodeTest',
  async ({page, episode}: {page: number; episode: string}) => {
    console.log(`masuk 1 ${page} ${episode}`);
    return await episodeDomainUseCase.getEpisode(page, episode);
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
        state.searchText = action.meta.arg.episode;

        if (action.payload.length === 0) {
          state.hasMore = false;
        }

        if (state.searchText === '') {
          state.data = [...state.data, ...action.payload];
        } else {
          state.data = action.payload;
          state.page = 1; // Reset page to 1 on search
        }

        state.page += 1;
      })
      .addCase(getEpisode.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default episodeSlice.reducer;
