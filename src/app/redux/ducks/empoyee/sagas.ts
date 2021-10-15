import { toast } from 'react-toastify';
import { put, call, all, takeLatest, fork } from 'redux-saga/effects';
import { IReducerAction } from '..';
import API from '../../../services/api';

import { fetchEmployeeDataError, fetchEmployeeDataSuccess } from './actions';
import { EmployeeActionType, IEmployeesDetails } from './types';

function* handleFetchEmployeeInfos(action: IReducerAction<any>): Generator {
  try {
    const { userId } = action.payload;
    console.log('chegou aqui');

    const response = (yield call(
      API.get,
      `http://localhost:3001/faxinaja-api/amusers/find-amusers/${userId}`,
    )) as IEmployeesDetails;

    if (response) {
      yield put(fetchEmployeeDataSuccess(response));
    }
  } catch (err) {
    yield put(fetchEmployeeDataError());
    toast.error('Login/Senha incorretos !');
  }
}

function* watchFetchRequest(): Generator {
  yield takeLatest(
    EmployeeActionType.FETCH_EMPLOYEE_INFO,
    handleFetchEmployeeInfos,
  );
}

export function* employeeSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
