export type IAccountState = {
  readonly accounts: IAccounts;
  readonly isLoading: boolean;
};

export type IAccounts = {
  name: string;
  email: string;
};

export const AccountActionType = {
  FETCH_ACCOUNT_DATA: '@@account/FETCH_ACCOUNT_DATA',
};
