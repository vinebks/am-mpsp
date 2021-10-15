/* eslint-disable no-param-reassign */
import produce from 'immer';
import { IReducerAction } from '..';
import { IEmployeeState, EmployeeActionType, IEmployeesDetails } from '.';

export const initialState: IEmployeeState = {
  employee: {} as IEmployeesDetails,
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const employeeReducer = (
  state = initialState,
  action: IReducerAction<IEmployeesDetails>,
) => {
  switch (action.type) {
    case EmployeeActionType.FETCH_EMPLOYEE_INFO:
      return produce(state, draft => {
        draft.isLoading = true;
      });

    case EmployeeActionType.FETCH_EMPLOYEE_INFO_SUCCESS:
      return produce(state, draft => {
        draft.employee = action.payload as IEmployeesDetails;
        draft.isLoading = false;
      });

    case EmployeeActionType.FETCH_EMPLOYEE_INFO_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    case EmployeeActionType.UPDATE_EMPLOYEE_SALARY:
      return produce(state, draft => {
        draft.isLoading = true;
      });

    case EmployeeActionType.UPDATE_EMPLOYEE_SALARY_SUCCESS:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    case EmployeeActionType.UPDATE_EMPLOYEE_SALARY_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });

    default:
      return state;
  }
};
