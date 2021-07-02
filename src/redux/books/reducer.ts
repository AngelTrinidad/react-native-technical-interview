import { State, Actions, ActionType } from './types';

const initialState: State = {
  books: [],
  bookDetail: null
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case ActionType.BOOK_DETAIL:
      return {
        ...state,
        bookDetail: action.payload
      };
    case ActionType.CLEAR_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: null
      };
    default:
      return state;
  }
};

export default reducer;
