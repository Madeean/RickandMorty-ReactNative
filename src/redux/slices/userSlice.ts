import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {User} from './../../domain/model/User';
import {userDomainUseCase} from './../../di/depedencies.ts';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: number) => {
    return await userDomainUseCase.getUser(userId);
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user';
    });
  },
});

export default userSlice.reducer;
