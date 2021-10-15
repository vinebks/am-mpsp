/* eslint-disable no-param-reassign */
import produce from 'immer';
import { IReducerAction } from '..';
import { IUserState, UserActionType, ILoggedUser, IEmployeesType } from '.';

export const initialState: IUserState = {
  name: '',
  userDetails: false,
  loggedUser: {} as ILoggedUser,
  budgetAndEmployees: {} as IEmployeesType,
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userReducer = (
  state = initialState,
  action: IReducerAction<string | ILoggedUser | IEmployeesType | number>,
) => {
  switch (action.type) {
    case UserActionType.FETCH_USER_INFO:
      return produce(state, draft => {
        draft.isLoading = true;
      });

    case UserActionType.FETCH_USER_INFO_SUCCESS:
      return produce(state, draft => {
        draft.loggedUser = action.payload as ILoggedUser;
        draft.isLoading = false;
      });

    case UserActionType.FETCH_USER_INFO_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    case UserActionType.OPEN_USER_DETAILS:
      return produce(state, draft => {
        draft.userDetails = true;
      });

    case UserActionType.CLOSE_USER_DETAILS:
      return produce(state, draft => {
        draft.userDetails = false;
        draft.isLoading = false;
      });

    case UserActionType.FETCH_EMPLOYEES_INFO_SUCCESS:
      return produce(state, draft => {
        draft.budgetAndEmployees = action.payload as IEmployeesType;
        draft.isLoading = false;
      });

    case UserActionType.FETCH_EMPLOYEES_INFO_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    case UserActionType.FETCH_BALANCE:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    case UserActionType.FETCH_BALANCE_SUCCESS:
      return produce(state, draft => {
        draft.loggedUser.cliente.balance = action.payload as number;
        draft.isLoading = false;
      });

    case UserActionType.FETCH_BALANCE_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    default:
      return state;
  }
};
