import { Action, combineReducers } from 'redux';
import { PayloadAction, TypeConstant } from 'typesafe-actions';
import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { IAccountState, accountReducer, accountSaga } from './account';
import { IUserState, userReducer, userSaga } from './user';
import { IEmployeeState, employeeReducer, employeeSaga } from './empoyee';

export type IApplicationState = {
  account: IAccountState;
  user: IUserState;
  employee: IEmployeeState;
};

export type IReducerAction<TPayload> = Action<TypeConstant> &
  PayloadAction<TypeConstant, TPayload>;

export const rootReducer = combineReducers<IApplicationState>({
  account: accountReducer,
  user: userReducer,
  employee: employeeReducer,
});

export function* rootSaga(): SagaIterator {
  yield all([fork(accountSaga), fork(userSaga), fork(employeeSaga)]);
}
