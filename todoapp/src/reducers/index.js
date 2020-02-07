import { combineReducers } from "redux";
const initialState = {
  todoList: [],
  errorMsg: ""
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      if (!action.payload) {
        return { ...state, errorMsg: "Please enter a task" };
      } else if (
        state.todoList.filter(val => val.itemName === action.payload).length > 0
      ) {
        return { ...state, errorMsg: "Task already exists" };
      } else {
        return {
          ...state,
          errorMsg: "",
          todoList: [
            ...state.todoList,
            { itemName: action.payload, status: false }
          ]
        };
      }
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter(val => val.itemName !== action.payload)
      };
    }

    case "MARK_DONE": {
      state.todoList.forEach(function(obj) {
        if (obj.itemName === action.payload) {
          obj.status = !obj.status;
        }
      });
      return { ...state, todoList: [...state.todoList] };
    }
    default:
      return state;
  }
};

export default combineReducers({
  todoApp: todoApp
});
