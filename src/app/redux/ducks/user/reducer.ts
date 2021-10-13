/* eslint-disable no-param-reassign */
import produce from 'immer';
import { IReducerAction } from '..';
import { IUserState, UserActionType } from '.';

export const initialState: IUserState = {
  name: '',
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userReducer = (
  state = initialState,
  action: IReducerAction<string>,
) => {
  switch (action.type) {
    case UserActionType.FETCH_USER_INFO:
      return produce(state, draft => {
        draft.isLoading = true;
      });

    case UserActionType.FETCH_USER_INFO_SUCCESS:
      return produce(state, draft => {
        draft.name = action.payload;
        draft.isLoading = false;
      });

    case UserActionType.FETCH_USER_INFO_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    default:
      return state;
  }
};
