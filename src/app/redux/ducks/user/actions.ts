import { action } from 'typesafe-actions';
import { IUserState, UserActionType } from './types';
import { IReducerAction } from '..';

export const fetchUserData = (data: {
  username: string;
  password: string;
}): IReducerAction<{}> => action(UserActionType.FETCH_USER_INFO, data);

export const fetchUserDataSuccess = (name: string): IReducerAction<string> =>
  action(UserActionType.FETCH_USER_INFO_SUCCESS, name);

export const fetchUserDataError = (): IReducerAction<{}> =>
  action(UserActionType.FETCH_USER_INFO_ERROR, {});
