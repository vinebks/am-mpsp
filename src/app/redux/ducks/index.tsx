import { Action, combineReducers } from 'redux';
import { PayloadAction, TypeConstant } from 'typesafe-actions';
import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { IAccountState, accountReducer, accountSaga } from './account';

export type IApplicationState = {
  account: IAccountState;
};

export type IReducerAction<TPayload> = Action<TypeConstant> &
  PayloadAction<TypeConstant, TPayload>;

export const rootReducer = combineReducers<IApplicationState>({
  account: accountReducer,
});

export function* rootSaga(): SagaIterator {
  yield all([fork(accountSaga)]);
}
