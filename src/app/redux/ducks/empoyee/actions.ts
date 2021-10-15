import { action } from 'typesafe-actions';
import { EmployeeActionType, IEmployeesDetails } from './types';
import { IReducerAction } from '..';

export const fetchEmployeeData = (data: {
  userId: string;
}): IReducerAction<{}> => action(EmployeeActionType.FETCH_EMPLOYEE_INFO, data);

export const fetchEmployeeDataSuccess = (
  data: IEmployeesDetails,
): IReducerAction<{}> =>
  action(EmployeeActionType.FETCH_EMPLOYEE_INFO_SUCCESS, data);

export const fetchEmployeeDataError = (): IReducerAction<{}> =>
  action(EmployeeActionType.FETCH_EMPLOYEE_INFO_ERROR, {});

export const updateEmployeeSalary = (data: {
  userId: string;
  aumento: number;
  gestorDocument: string;
}): IReducerAction<{}> =>
  action(EmployeeActionType.UPDATE_EMPLOYEE_SALARY, data);

export const updateEmployeeSalarySuccess = (
  data: IEmployeesDetails,
): IReducerAction<{}> =>
  action(EmployeeActionType.UPDATE_EMPLOYEE_SALARY_SUCCESS, data);

export const updateEmployeeSalaryError = (): IReducerAction<{}> =>
  action(EmployeeActionType.UPDATE_EMPLOYEE_SALARY_ERROR, {});
