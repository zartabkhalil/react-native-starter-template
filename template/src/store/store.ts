import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { RootReducer, rootReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: []
};

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store, null, async () => {
  // await SplashScreen.preventAutoHideAsync()
});
