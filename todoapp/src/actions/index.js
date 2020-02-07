let todoId = 0;
export const addTodo = itemName => {
  return {
    type: "ADD_TODO",
    itemId: todoId++,
    payload: itemName
  };
};

export const removeTodo = itemName => {
  return {
    type: "REMOVE_TODO",
    payload: itemName
  };
};

export const markDone = itemName => {
  return {
    type: "MARK_DONE",
    payload: itemName
  };
};
