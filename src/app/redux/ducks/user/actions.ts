import { action } from 'typesafe-actions';
import { IUserState, UserActionType } from './types';
import { IReducerAction } from '..';
import { IEmployeesType, ILoggedUser } from '.';

export const fetchUserData = (data: {
  username: string;
  password: string;
}): IReducerAction<{}> => action(UserActionType.FETCH_USER_INFO, data);

export const fetchUserDataSuccess = (data: ILoggedUser): IReducerAction<{}> =>
  action(UserActionType.FETCH_USER_INFO_SUCCESS, data);

export const fetchUserDataError = (): IReducerAction<{}> =>
  action(UserActionType.FETCH_USER_INFO_ERROR, {});

export const openUserDetails = (): IReducerAction<{}> =>
  action(UserActionType.OPEN_USER_DETAILS, {});

export const closeUserDetails = (): IReducerAction<{}> =>
  action(UserActionType.CLOSE_USER_DETAILS, {});

export const fetchEmployeesData = (setor: string): IReducerAction<string> =>
  action(UserActionType.FETCH_EMPLOYEES_INFO, setor);

export const fetchEmployeesDataSuccess = (
  data: IEmployeesType,
): IReducerAction<{}> =>
  action(UserActionType.FETCH_EMPLOYEES_INFO_SUCCESS, data);

export const fetchEmployeesDataError = (): IReducerAction<{}> =>
  action(UserActionType.FETCH_EMPLOYEES_INFO_ERROR, {});

export const fetchBalance = (document: string): IReducerAction<string> =>
  action(UserActionType.FETCH_BALANCE, document);

export const fetchBalanceSuccess = (balance: number): IReducerAction<{}> =>
  action(UserActionType.FETCH_BALANCE_SUCCESS, balance);

export const fetchBalanceError = (): IReducerAction<{}> =>
  action(UserActionType.FETCH_BALANCE_ERROR, {});
