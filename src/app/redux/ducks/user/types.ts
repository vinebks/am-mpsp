export type IUserState = {
  readonly name: string;
  readonly userDetails: boolean;
  readonly loggedUser: ILoggedUser;
  readonly budgetAndEmployees: IEmployeesType;
  readonly isLoading: boolean;
};

export type IEmployeesType = {
  budget: number;
  users: IEmployeesdetails[];
};

export type IEmployeesdetails = {
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

export type ILoggedUser = {
  token: string;
  cliente: ILoggedUserInfos;
};

export type ILoggedUserInfos = {
  name: string;
  setor: string;
  cargo: string;
  balance: number;
  contact: string;
  userType: string;
  address: IUserAddress;
  document: string;
  email: string;
};

export type IUserAddress = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  region: string;
};

export const UserActionType = {
  FETCH_USER_INFO: '@@user/FETCH_USER_INFO',

  FETCH_USER_INFO_SUCCESS: '@@user/FETCH_USER_INFO_SUCCESS',

  FETCH_USER_INFO_ERROR: '@@user/FETCH_USER_INFO_ERROR',

  OPEN_USER_DETAILS: '@@user/OPEN_USER_DETAILS',

  CLOSE_USER_DETAILS: '@@user/CLOSE_USER_DETAILS',

  FETCH_EMPLOYEES_INFO: '@@user/FETCH_EMPLOYEES_INFO',

  FETCH_EMPLOYEES_INFO_SUCCESS: '@@user/FETCH_EMPLOYEES_INFO_SUCCESS',

  FETCH_EMPLOYEES_INFO_ERROR: '@@user/FETCH_EMPLOYEES_INFO_ERROR',

  FETCH_BALANCE: '@@user/FETCH_BALANCE',
  FETCH_BALANCE_SUCCESS: '@@user/FETCH_BALANCE_SUCCESS',
  FETCH_BALANCE_ERROR: '@@user/FETCH_BALANCE_ERROR',
};
