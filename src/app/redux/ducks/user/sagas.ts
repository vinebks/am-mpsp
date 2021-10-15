import { toast } from 'react-toastify';
import {
  put,
  call,
  all,
  takeLatest,
  fork,
  select,
  delay,
} from 'redux-saga/effects';
import {
  fetchEmployeesData,
  fetchEmployeesDataError,
  fetchEmployeesDataSuccess,
  fetchUserDataError,
  fetchUserDataSuccess,
  IEmployeesType,
  ILoggedUser,
  UserActionType,
} from '.';
import { IReducerAction } from '..';
import API from '../../../services/api';
import history from '../../../util/browser-history';

type UserAuth = {
  token: string;
  name: string;
  email: string;
};

function* handleFetchUserInfos(action: IReducerAction<any>): Generator {
  try {
    const { username, password } = action.payload;
    console.log('chegou aqui');

    const response = (yield call(
      API.post,
      `http://localhost:3001/faxinaja-api/auth`,
      {
        email: username,
        password,
      },
    )) as ILoggedUser;

    if (response) {
      yield put(fetchUserDataSuccess(response));
      yield put(fetchEmployeesData(response.cliente.setor));
      history.push('/home');
    }
  } catch (err) {
    yield put(fetchUserDataError());
    toast.error('Login/Senha incorretos !');
  }
}

function* handleFetchEmployeesInfos(action: IReducerAction<string>): Generator {
  try {
    const setor = action.payload;

    const response = (yield call(
      API.get,
      `http://localhost:3001/faxinaja-api/amusers/list-amusers/${setor}`,
    )) as IEmployeesType;

    if (response) {
      yield put(fetchEmployeesDataSuccess(response));
    }
  } catch (err) {
    yield put(fetchEmployeesDataError());
  }
}

function* watchFetchRequest(): Generator {
  yield takeLatest(UserActionType.FETCH_USER_INFO, handleFetchUserInfos);
  yield takeLatest(
    UserActionType.FETCH_EMPLOYEES_INFO,
    handleFetchEmployeesInfos,
  );
}

export function* userSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
