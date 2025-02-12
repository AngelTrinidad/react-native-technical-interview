import { AppState } from '@interfaces/redux';
import { useSelector as nativeUserSelector, useDispatch as nativeUseDispatch } from 'react-redux';

export const useSelector = <TState = AppState, TSelected = unknown>(
  selector: (state: TState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected => {
  return nativeUserSelector(selector, equalityFn);
};

export const useDispatch = nativeUseDispatch;
