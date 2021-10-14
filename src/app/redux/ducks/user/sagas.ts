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
import { fetchUserDataError, fetchUserDataSuccess, UserActionType } from '.';
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
    )) as UserAuth;

    if (response.name) {
      yield put(fetchUserDataSuccess(response.name));

      history.push('/home');
    }
  } catch (err) {
    yield put(fetchUserDataError());
    toast.error('Login/Senha incorretos !');
  }
}

function* watchFetchRequest(): Generator {
  yield takeLatest(UserActionType.FETCH_USER_INFO, handleFetchUserInfos);
}

export function* userSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
