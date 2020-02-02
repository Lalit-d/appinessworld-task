import { LIST_EMPLOYEES } from '../actions/types';

const initialState ={
  employeeList: {}
};

export default function(state = initialState, action) {
  switch (action.type) {    
    case LIST_EMPLOYEES:
      return{
        ...state,
        employeeList: action.payload
      };

    default:
      return state;
  }
}