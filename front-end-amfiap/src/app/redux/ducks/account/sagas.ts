import {
  put,
  call,
  all,
  takeLatest,
  fork,
  select,
  delay,
} from 'redux-saga/effects';

function* watchFetchRequest(): Generator {
  yield all([]);
}

export function* accountSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
