import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { put, call, all, takeLatest, fork } from 'redux-saga/effects';
import {
  fetchEmployeeData,
  updateEmployeeSalaryError,
  updateEmployeeSalarySuccess,
} from '.';
import { IReducerAction } from '..';
import API from '../../../services/api';
import { fetchBalance, fetchEmployeesData } from '../user';

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

function* updateEmployeeSalary(action: IReducerAction<any>): Generator {
  try {
    const { userId, aumento, gestorDocument, setor } = action.payload;
    console.log('chegou aqui');

    const response = (yield call(
      API.post,
      `http://localhost:3001/faxinaja-api//amusers/update-salary/${userId}`,
      {
        newSalary: aumento,
        document: gestorDocument,
      },
    )) as any;

    if (response) {
      yield put(updateEmployeeSalarySuccess());
      toast.success('Salario alterado com sucesso');
      yield put(fetchEmployeeData({ userId }));
      yield put(fetchEmployeesData(setor));
      yield put(fetchBalance(gestorDocument));
    }
  } catch (err) {
    yield put(updateEmployeeSalaryError());
    toast.error('Login/Senha incorretos !');
  }
}

function* watchFetchRequest(): Generator {
  yield takeLatest(
    EmployeeActionType.FETCH_EMPLOYEE_INFO,
    handleFetchEmployeeInfos,
  );
  yield takeLatest(
    EmployeeActionType.UPDATE_EMPLOYEE_SALARY,
    updateEmployeeSalary,
  );
}

export function* employeeSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
