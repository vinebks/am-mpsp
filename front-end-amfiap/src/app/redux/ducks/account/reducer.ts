import produce from 'immer';
import { IAccounts, IAccountState, AccountActionType } from './types';
import { IReducerAction } from '..';

export const initialState: IAccountState = {
  accounts: {} as IAccounts,
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const accountReducer = (
  state = initialState,
  action: IReducerAction<IAccounts>,
) => {
  switch (action.type) {
    case AccountActionType.FETCH_ACCOUNT_DATA:
      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.isLoading = true;
      });
    default:
      return state;
  }
};
