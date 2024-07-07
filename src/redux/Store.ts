import {combineReducers, configureStore} from '@reduxjs/toolkit';
import episodeSlice from './slices/EpisodeSlice.ts';

const rootReducer = combineReducers({
  episode: episodeSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
