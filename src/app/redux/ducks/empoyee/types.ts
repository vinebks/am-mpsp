export type IEmployeeState = {
  readonly employee: IEmployeesDetails;
  readonly isLoading: boolean;
};

export type IEmployeesDetails = {
  _id: string;
  userId: string;
  Nome: string;
  Salary: string;
  Pais: string;
  locationCity: string;
  specficName: string;
  siglaSetor: string;
  hiringDate: string;
  JobTitle: string;
};

export const EmployeeActionType = {
  FETCH_EMPLOYEE_INFO: '@@employee/FETCH_EMPLOYEE_INFO',

  FETCH_EMPLOYEE_INFO_SUCCESS: '@@employee/FETCH_EMPLOYEE_INFO_SUCCESS',

  FETCH_EMPLOYEE_INFO_ERROR: '@@employee/FETCH_EMPLOYEE_INFO_ERROR',

  UPDATE_EMPLOYEE_SALARY: '@@employee/UPDATE_EMPLOYEE_SALARY',

  UPDATE_EMPLOYEE_SALARY_SUCCESS: '@@employee/UPDATE_EMPLOYEE_SALARY_SUCCESS',

  UPDATE_EMPLOYEE_SALARY_ERROR: '@@employee/UPDATE_EMPLOYEE_SALARY_ERROR',
};
