export type IUserState = {
  readonly name: string;
  readonly isLoading: boolean;
};

export const UserActionType = {
  FETCH_USER_INFO: '@@user/FETCH_USER_INFO',

  FETCH_USER_INFO_SUCCESS: '@@user/FETCH_USER_INFO_SUCCESS',

  FETCH_USER_INFO_ERROR: '@@user/FETCH_USER_INFO_ERROR',
};
