import EmployeeList from '../../src/utils/employeeList.json';
import { LIST_EMPLOYEES } from './types'
 
export const listEmployee = () => dispatch => {
  const { user } = EmployeeList;
    dispatch({
      type: LIST_EMPLOYEES,
      payload: user
    }) 
};

export const loginUser = history => () =>{
  history.push('/employee-list')
};