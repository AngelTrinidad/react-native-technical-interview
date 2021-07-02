import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State as BookState } from '@redux/books/types';

export interface AppState {
  book: BookState;
}

export type ReduxEmptyAction<Type> = {
  type: Type;
};

export type ReduxAction<Type, Payload> = {
  type: Type;
  payload: Payload;
};

export type ReduxThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
