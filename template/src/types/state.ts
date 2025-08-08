import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export type UserState = {
  _id: string;
  email: string;
  token: null | string;
};

//Organization
type SetUserction = {
  type: string;
  payload: Partial<UserState>;
};

export type UserAction = SetUserction;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
