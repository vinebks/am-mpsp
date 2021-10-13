import { Action, combineReducers } from 'redux';
import { PayloadAction, TypeConstant } from 'typesafe-actions';
import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { IAccountState, accountReducer, accountSaga } from './account';
import { IUserState, userReducer, userSaga } from './user';

export type IApplicationState = {
  account: IAccountState;
  user: IUserState;
};

export type IReducerAction<TPayload> = Action<TypeConstant> &
  PayloadAction<TypeConstant, TPayload>;

export const rootReducer = combineReducers<IApplicationState>({
  account: accountReducer,
  user: userReducer,
});

export function* rootSaga(): SagaIterator {
  yield all([fork(accountSaga), fork(userSaga)]);
}
