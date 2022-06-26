// single action
// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: {
//     id: 5,
//     name: "Lean Football",
//     completed: false,
//     priority: "Medium",
//   },
// };

// action creator
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priorities,
  };
};
