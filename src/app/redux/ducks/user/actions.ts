import { action } from 'typesafe-actions';
import { IUserState, UserActionType } from './types';
import { IReducerAction } from '..';
import { ILoggedUser } from '.';

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
