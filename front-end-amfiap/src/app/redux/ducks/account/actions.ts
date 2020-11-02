import { action } from 'typesafe-actions';
import { IAccounts, AccountActionType } from './types';
import { IReducerAction } from '..';

export const fetchAccountData = (id: number): IReducerAction<number> =>
  action(AccountActionType.FETCH_ACCOUNT_DATA, id);
