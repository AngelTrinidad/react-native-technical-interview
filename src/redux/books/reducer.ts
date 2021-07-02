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
        bookID: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
