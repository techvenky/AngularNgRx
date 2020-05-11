
import * as EmployeeActions from '../actions';
import { Employee } from 'src/app/shared/interfaces';

export interface EmployeeState {
  employees: Employee[];
  employee: Employee;
  loading: boolean;
  error: boolean;
}

export const initialState: EmployeeState = {
  employees: [],
  employee: null,
  loading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: EmployeeActions.AllEmployeeActions
): EmployeeState {

  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE: {
      return { ...state, loading: true };
    }

    case EmployeeActions.ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        loading: false,
        employees: [...state.employees, { ...action.payload }]
      };
    }

    case EmployeeActions.ADD_EMPLOYEE_ERROR: {
      return { ...state, loading: false };
    }

    case EmployeeActions.GET_EMPLOYEES: {
      return { ...state, loading: true };
    }

    case EmployeeActions.GET_EMPLOYEES_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case EmployeeActions.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    }

    case EmployeeActions.GET_EMPLOYEE: {
      return { ...state, loading: true };
    }

    case EmployeeActions.GET_EMPLOYEE_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case EmployeeActions.GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    }

    case EmployeeActions.DELETE_EMPLOYEE: {
      return {
        ...state,
        loading: true,
        employees: state.employees.filter(h => h !== action.payload)
      };
    }

    case EmployeeActions.DELETE_EMPLOYEE_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case EmployeeActions.DELETE_EMPLOYEE_ERROR: {
      return {
        ...state,
        employees: [...state.employees, action.payload.requestData],
        loading: false
      };
    }

    case EmployeeActions.UPDATE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map(h => {
          // if (h.id === action.payload.id) {
          //   state.loading = true;
          // }
          return h;
        })
      };
    }

    case EmployeeActions.UPDATE_EMPLOYEE_SUCCESS: {
      return modifyEmployeeState(state, action.payload);
    }

    case EmployeeActions.UPDATE_EMPLOYEE_ERROR: {
      return {
        ...state,
        loading: false,
        employees: state.employees.map(h => {
          if (h.id === action.payload.requestData.id) {
            // Huh? No idea what the error is!
            state.error = true;
          }
          return h;
        })
      };
    }

    case EmployeeActions.SET_EMPLOYEE_LOADING: {
      return {
        ...state,
        loading: action.payload == null ? true : action.payload
      };
    }
  }
  return state;
}

function modifyEmployeeState(employeeState: EmployeeState, employeeChanges: Partial<Employee>): EmployeeState {

  return {
    ...employeeState,
    loading: false,
    employees: employeeState.employees.map(h => {
      if (h.id === employeeChanges.id) {
        return { ...h, ...employeeChanges };
      } else {
        return h;
      }
    })
  };

}
