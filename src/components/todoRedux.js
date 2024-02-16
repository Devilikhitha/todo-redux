// // todoRedux.js

// import { createStore } from 'redux';

// // Action types
// const ADD_TODO = 'ADD_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const EDIT_TODO = 'EDIT_TODO';

// // todoRedux.js

// // ... (previous code)

// // Action types
// const SET_FILTER = 'SET_FILTER';

// // Action creator
// export const setFilter = (filter) => ({
//   type: SET_FILTER,
//   payload: { filter },
// });

// // ... (remaining code)


// // Action creators
// export const addTodo = (content) => ({
//   type: ADD_TODO,
//   payload: { content },
// });

// export const toggleTodo = (index) => ({
//   type: TOGGLE_TODO,
//   payload: { index },
// });

// export const deleteTodo = (index) => ({
//   type: DELETE_TODO,
//   payload: { index },
// });

// export const editTodo = (index, content) => ({
//   type: EDIT_TODO,
//   payload: { index, content },
// });

// // Reducer
// const initialState = {
//   tasks: [],
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             content: action.payload.content,
//             completed: false,
//             editing: false,
//           },
//         ],
//       };

//     case TOGGLE_TODO:
//       return {
//         ...state,
//         tasks: state.tasks.map((task, index) =>
//           index === action.payload.index
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };

//     case DELETE_TODO:
//       return {
//         ...state,
//         tasks: state.tasks.filter((_, index) => index !== action.payload.index),
//       };

//     case EDIT_TODO:
//       return {
//         ...state,
//         tasks: state.tasks.map((task, index) =>
//           index === action.payload.index
//             ? { ...task, content: action.payload.content, editing: false }
//             : task
//         ),
//       };

//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(todoReducer);

// export default store;



// todoRedux.js

import { createStore } from 'redux';

// Action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const SET_FILTER = 'SET_FILTER';

// Action creators
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { content },
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: { index },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: { index },
});

export const editTodo = (index, content) => ({
  type: EDIT_TODO,
  payload: { index, content },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});



// Reducer
const initialState = {
  tasks: [],
  filter: 'all', // Default filter
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload.content,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload.index),
      };

    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index
            ? { ...task, content: action.payload.content }
            : task
        ),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);

export default store;
