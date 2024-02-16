// // todo1.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';


// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));
//   };

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

//   const showItems = (filter) => {
//     return tasks
//       .filter((item) => {
//         if (filter === 'completed' && !item.completed) {
//           return false;
//         }

//         if (filter === 'notcompleted' && item.completed) {
//           return false;
//         }

//         return true;
//       })
//       .map((item, i) => (
//         <li key={i}>
//           <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//             {item.content}
//           </span>
//           <div className="button-container">
//             <button onClick={() => handleDone(i)}>
//               {item.completed ? 'Undone' : 'Done'}
//             </button>
//             <button onClick={() => handleEditOrDelete(i)}>
//               {item.completed ? 'Delete' : 'Edit'}
//             </button>
//           </div>
//         </li>
//       ));
//   };

//   return (
//     <div >
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addItem}>{editTask !== null ? 'Save Edit' : 'Add to List'}</button>
//       </div>
//       <div>
//         <label>
//           <input type="radio" name="filter" value="all" defaultChecked onClick={() => {}} />
//           All
//         </label>
//         <label>
//           <input type="radio" name="filter" value="completed" onClick={() => {}} />
//           Completed
//         </label>
//         <label>
//           <input type="radio" name="filter" value="notcompleted" onClick={() => {}} />
//           Not Completed
//         </label>
//       </div>
//       <div>
//         <h2>My Tasks</h2>
//         <ul>{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;  







// todo1.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));
//   };

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

// //   const showItems = (filter) => {
// //     return tasks
// //       .filter((item) => {
// //         if (filter === 'completed' && !item.completed) {
// //           return false;
// //         }

// //         if (filter === 'notcompleted' && item.completed) {
// //           return false;
// //         }

// //         return true;
// //       })
// //       .map((item, i) => (
// //         <li key={i} className="task-item">
// //           <span className={item.completed ? 'completed' : ''}>
// //             {item.content}
// //           </span>
// //           <div className="button-container">
// //             <button className="action-button" onClick={() => handleDone(i)}>
// //               {item.completed ? 'Undone' : 'Done'}
// //             </button>
// //             <button className="action-button" onClick={() => handleEditOrDelete(i)}>
// //               {item.completed ? 'Delete' : 'Edit'}
// //             </button>
// //           </div>
// //         </li>
// //       ));
// //   };


// // todo1.js

// // ... (previous code)

// const showItems = (filter) => {
//     return tasks
//       .filter((item) => {
//         if (filter === 'completed' && !item.completed) {
//           return false;
//         }
  
//         if (filter === 'notcompleted' && item.completed) {
//           return false;
//         }
  
//         return true;
//       })
//       .map((item, i) => (
//         <li key={i} className="task-item">
//           <span className={item.completed ? 'completed' : ''}>
//             {item.content}
//           </span>
//           <div className="button-container">
//             <button className="action-button" onClick={() => handleDone(i)}>
//               {item.completed ? 'Undone' : 'Done'}
//             </button>
//             <button className="action-button" onClick={() => handleEditOrDelete(i)}>
//               {item.completed ? 'Delete' : 'Edit'}
//             </button>
//           </div>
//         </li>
//       ));
//   };
  
//   // ... (remaining code)
  

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className="text-input"
//         />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input type="radio" name="filter" value="all" defaultChecked onClick={() => {}} />
//           All
//         </label>
//         <label>
//           <input type="radio" name="filter" value="completed" onClick={() => filterItems('completed')} />
//           Completed
//         </label>
//         <label>
//           <input type="radio" name="filter" value="notcompleted" onClick={() => filterItems('notcompleted')} />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2 className="tasks-heading">My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;



// // todo1.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const filter = useSelector((state) => state.filter);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));
//   };

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

//   const handleFilterChange = (selectedFilter) => {
//     dispatch(setFilter(selectedFilter));
//   };

//   const showItems = () => {
//     return tasks
//       .filter((item) => {
//         if (filter === 'completed' && !item.completed) {
//           return false;
//         }

//         if (filter === 'notcompleted' && item.completed) {
//           return false;
//         }

//         return true;
//       })
//       .map((item, i) => (
//         <li key={i}>
//           <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//             {item.content}
//           </span>
//           <div className="button-container">
//             <button onClick={() => handleDone(i)}>
//               {item.completed ? 'Undone' : 'Done'}
//             </button>
//             <button onClick={() => handleEditOrDelete(i)}>
//               {item.completed ? 'Delete' : 'Edit'}
//             </button>
//           </div>
//         </li>
//       ));
//   };

//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addItem}>{editTask !== null ? 'Save Edit' : 'Add to List'}</button>
//       </div>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="notcompleted"
//             checked={filter === 'notcompleted'}
//             onChange={() => handleFilterChange('notcompleted')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <div>
//         <h2>My Tasks</h2>
//         <ul>{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;











// // todo1.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));
//   };

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

//   const showItems = (filter) => {
//     return tasks
//       .filter((item) => {
//         if (filter === 'completed' && !item.completed) {
//           return false;
//         }

//         if (filter === 'notcompleted' && item.completed) {
//           return false;
//         }

//         return true;
//       })
//       .map((item, i) => (
//         <li className="task-item" key={i}>
//           <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//             {item.content}
//           </span>
//           <div className="button-container">
//             <button className="action-button" onClick={() => handleDone(i)}>
//               {item.completed ? 'Undone' : 'Done'}
//             </button>
//             <button className="action-button" onClick={() => handleEditOrDelete(i)}>
//               {item.completed ? 'Delete' : 'Edit'}
//             </button>
//           </div>
//         </li>
//       ));
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input
//           className="text-input"
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input type="radio" name="filter" value="all" defaultChecked onClick={() => {}} />
//           All
//         </label>
//         <label>
//           <input type="radio" name="filter" value="completed" onClick={() => {}} />
//           Completed
//         </label>
//         <label>
//           <input type="radio" name="filter" value="notcompleted" onClick={() => {}} />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2>My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;





//hi 

//todo1.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

// //   const handleDone = (index) => {
// //     dispatch(toggleTodo(index));
// //   };

// // const handleDone = (index) => {
// //     dispatch(toggleTodo(index));
// //     const task = tasks[index];
  
// //     if (filter === 'completed' && !task.completed) {
// //       setFilter('notcompleted');
// //     } else if (filter === 'notcompleted' && task.completed) {
// //       setFilter('completed');
// //     }
// //   };

// // const handleDone = (index) => {
// //     dispatch(toggleTodo(index));
  
// //     // Determine the current task's completion status
// //     const isCompleted = tasks[index].completed;
  
// //     // If the task is completed and the filter is 'notcompleted', switch to 'completed'
// //     // If the task is not completed and the filter is 'completed', switch to 'notcompleted'
// //     if ((isCompleted && filter === 'notcompleted') || (!isCompleted && filter === 'completed')) {
// //       setFilter(isCompleted ? 'completed' : 'notcompleted');
// //     }
// //   };
  
// const handleDone = (index) => {
//     dispatch(toggleTodo(index));
  
//     // Determine the current task's completion status
//     const isCompleted = tasks[index].completed;
  
//     // If the task is in the 'notcompleted' section, remove it and add to 'completed' section
//     if (filter === 'notcompleted' && isCompleted) {
//       const updatedTasks = [...tasks];
//       const completedTask = updatedTasks.splice(index, 1)[0];
//       completedTask.completed = false;
//       dispatch(addTodo(completedTask.content, false));
//     }
  
//     // If the filter is 'all', switch to 'completed' for completed tasks and 'notcompleted' for not completed tasks
//     if (filter === 'all') {
//       setFilter(isCompleted ? 'completed' : 'notcompleted');
//     }
//   };
  


  

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

//   const showItems = () => {
//     const filteredTasks = tasks.filter((item) => {
//       if (filter === 'completed' && !item.completed) {
//         return false;
//       }
//       if (filter === 'notcompleted' && item.completed) {
//         return false;
//       }
//       return true;
//     });

//     return filteredTasks.map((item, i) => (
//       <li className="task-item" key={i}>
//         <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//           {item.content}
//         </span>
//         <div className="button-container">
//           <button className="action-button" onClick={() => handleDone(i)}>
//             {item.completed ? 'Undone' : 'Done'}
//           </button>
//           <button className="action-button" onClick={() => handleEditOrDelete(i)}>
//             {item.completed ? 'Delete' : 'Edit'}
//           </button>
//         </div>
//       </li>
//     ));
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input
//           className="text-input"
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="notcompleted"
//             checked={filter === 'notcompleted'}
//             onChange={() => setFilter('notcompleted')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2>My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;





// filters  are not applying for the above code

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//     const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//     showItems(activeFilter);
//     updateAddToListButtonText();
//   };

//   // const handleDone = (index) => {
//   //   dispatch(toggleTodo(index));

//   //   const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//   //   showItems(activeFilter);
//   //   updateAddToListButtonText();
//   // };

//   // const handleDone = (index) => {
//   //   dispatch(toggleTodo(index));
  
//   //   // Determine the current task's completion status
//   //   const isCompleted = tasks[index].completed;
  
//   //   // If the task is in the 'notcompleted' section, remove it and add to 'completed' section
//   //   if (filter === 'notcompleted' && isCompleted) {
//   //     const updatedTasks = [...tasks];
//   //     const completedTask = updatedTasks.splice(index, 1)[0];
//   //     completedTask.completed = false;
//   //     dispatch(addTodo(completedTask.content, false));
//   //   }
  
//   //   // If the filter is 'notcompleted' and the task is completed, switch to 'all'
//   //   if (filter === 'notcompleted' && isCompleted) {
//   //     setFilter('all');
//   //   }
//   // };
  
//   // const handleDone = (index) => {
//   //   dispatch(toggleTodo(index));
  
//   //   const isCompleted = tasks[index].completed;
  
//   //   if (filter === 'notcompleted' && isCompleted) {
//   //     // Move the completed task to the "completed" section
//   //     const updatedTasks = [...tasks];
//   //     const completedTask = updatedTasks.splice(index, 1)[0];
//   //     completedTask.completed = false;
//   //     dispatch(addTodo(completedTask.content, false));
//   //   }
//   // };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));
//     const isCompleted = tasks[index].completed;
//     if (filter === 'notcompleted' && isCompleted) {
//       // Move the completed task to the "completed" section
//       const updatedTasks = [...tasks];
//       const completedTask = updatedTasks.splice(index, 1);
//       completedTask.completed = false;
//       dispatch(addTodo(completedTask.content, false));
//     }
//   };
  
  

//   // const handleEditOrDelete = (index) => {
//   //   tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   //   const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//   //   showItems(activeFilter);
//   //   updateAddToListButtonText();
//   // };

//   // const showItems = () => {
//   //   const filteredTasks = tasks.filter((item) => {
//   //     if (filter === 'completed' && !item.completed) {
//   //       return false;
//   //     }
//   //     if (filter === 'notcompleted' && item.completed) {
//   //       return false;
//   //     }
//   //     return true;
//   //   });

//     const handleEditOrDelete = (index) => {
//       tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//       const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//       showItems(activeFilter);
//       updateAddToListButtonText();
//     };
  
//     const showItems = () => {
//       const filteredTasks = tasks.filter((item) => {
//         if (filter === 'completed' && !item.completed) {
//           return false;
//         }
//         if (filter === 'notcompleted' && item.completed) {
//           return false;
//         }
//         return true;
//       });

//     return filteredTasks.map((item, i) => (
//       <li className="task-item" key={i}>
//         <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//           {item.content}
//         </span>
//         <div className="button-container">
//           <button className="action-button" onClick={() => handleDone(i)}>
//             {item.completed ? 'Undone' : 'Done'}
//           </button>
//           <button className="action-button" onClick={() => handleEditOrDelete(i)}>
//             {item.completed ? 'Delete' : 'Edit'}
//           </button>
//         </div>
//       </li>
//     ));
//   };

//   const updateAddToListButtonText = () => {
//     const addToDoListButton = document.querySelector('.save-button');
//     addToDoListButton.textContent = editTask !== null ? 'Save Edit' : 'Add to List';
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input
//           className="text-input"
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => setFilter('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="notcompleted"
//             checked={filter === 'notcompleted'}
//             onChange={() => setFilter('notcompleted')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2>My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const filter = useSelector((state) => state.filter);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   useEffect(() => {
//     // Update the displayed tasks when tasks or filter change
//     showItems();
//   }, [tasks, filter]);

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }

//     setInputValue('');
//   };

//   const handleDone = (index) => {
//     dispatch(toggleTodo(index));

//     const isCompleted = tasks[index].completed;

//     if (filter === 'notcompleted' && isCompleted) {
//       // Move the completed task to the "completed" section
//       const updatedTasks = [...tasks];
//       const completedTask = updatedTasks.splice(index, 1)[0];
//       completedTask.completed = false;
//       dispatch(addTodo(completedTask.content, false));
//     }
//   };


//   // const handleDone = (index) => {
//   //   dispatch(toggleTodo(index));
  
//   //   const isCompleted = tasks[index].completed;
  
//   //   if (filter === 'notcompleted' && isCompleted) {
//   //     // Move the completed task to the "not completed" section
//   //     const updatedTasks = [...tasks];
//   //     const notCompletedTask = updatedTasks.splice(index, 1)[0];
//   //     notCompletedTask.completed = true; // Set completed to true for "not completed" section
//   //     dispatch(addTodo(notCompletedTask.content, true));
//   //   }
//   // };
  

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//   };

//   const showItems = () => {
//     const filteredTasks = tasks.filter((item) => {
//       if (filter === 'completed' && !item.completed) {
//         return false;
//       }
//       if (filter === 'notcompleted' && item.completed) {
//         return false;
//       }
//       return true;
//     });

//     return filteredTasks.map((item, i) => (
//       <li key={i} className="task-item">
//         <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//           {item.content}
//         </span>
//         <div className="button-container">
//           <button onClick={() => handleDone(i)}>
//             {item.completed ? 'Undone' : 'Done'}
//           </button>
//           <button onClick={() => handleEditOrDelete(i)}>
//             {item.completed ? 'Delete' : 'Edit'}
//           </button>
//         </div>
//       </li>
//     ));
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input
//           className="text-input"
//           type="text"
//           placeholder="What needs to be done?"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={filter === 'all'}
//             onChange={() => dispatch(setFilter('all'))}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={filter === 'completed'}
//             onChange={() => dispatch(setFilter('completed'))}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="notcompleted"
//             checked={filter === 'notcompleted'}
//             onChange={() => dispatch(setFilter('notcompleted'))}
//           />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2 className="tasks-heading">My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;




// perplexity code

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
// import './todo.css';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const [inputValue, setInputValue] = useState('');
//   const [editTask, setEditTask] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const addItem = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }
//     if (editTask !== null) {
//       dispatch(editTodo(editTask.index, inputValue));
//       setEditTask(null);
//     } else {
//       dispatch(addTodo(inputValue));
//     }
//     setInputValue('');
//     const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//     showItems(activeFilter);
//     updateAddToListButtonText();
//   };

//   // const handleDone = (index) => {
//   //   dispatch(toggleTodo(index));
//   //   const isCompleted = tasks[index].completed;
//   //   if (filter === 'notcompleted' && isCompleted) {
//   //     // Move the completed task to the "completed" section
//   //     const updatedTasks = [...tasks];
//   //     const completedTask = updatedTasks.splice(index, 1);
//   //     completedTask.completed = false;
//   //     dispatch(addTodo(completedTask.content, false));
//   //   }
//   // };

  
// // const handleDone = (index) => {
// //   dispatch(toggleTodo(index));
// //   const isCompleted = tasks[index].completed;
// //   if (filter === 'notcompleted' && isCompleted) {
// //     dispatch(setFilter('all')); // Update the filter to 'all'
// //   }
// // };

// const handleDone = (index) => {
//   const isCompleted = tasks[index].completed;
//   if (isCompleted) {
//     return; // Return early if the task is already completed
//   }
//   dispatch(toggleTodo(index));
//   if (filter === 'notcompleted') {
//     setFilter('all'); // Update the filter to 'all' if the task is in the 'notcompleted' section
//   }
// };

//   const handleEditOrDelete = (index) => {
//     tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
//     const activeFilter = document.querySelector('input[name="filter"]:checked').value;
//     showItems(activeFilter);
//     updateAddToListButtonText();
//   };

//   const showItems = () => {
//     const filteredTasks = tasks.filter((item) => {
//       if (filter === 'completed' && !item.completed) {
//         return false;
//       }
//       if (filter === 'notcompleted' && item.completed) {
//         return false;
//       }
//       return true;
//     });

//     return filteredTasks.map((item, i) => (
//       <li className="task-item" key={i}>
//         <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//           {item.content}
//         </span>
//         <div className="button-container">
//           <button className="action-button" onClick={() => handleDone(i)}>
//             {item.completed ? 'Undone' : 'Done'}
//           </button>
//           <button className="action-button" onClick={() => handleEditOrDelete(i)}>
//             {item.completed ? 'Delete' : 'Edit'}
//           </button>
//         </div>
//       </li>
//     ));
//   };

//   const updateAddToListButtonText = () => {
//     const addToDoListButton = document.querySelector('.save-button');
//     addToDoListButton.textContent = editTask !== null ? 'Save Edit' : 'Add to List';
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-heading">Todo List</h1>
//       <div className="input-container">
//         <input className="text-input" type="text" placeholder="What needs to be done?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//         <button className="save-button" onClick={addItem}>
//           {editTask !== null ? 'Save Edit' : 'Add to List'}
//         </button>
//       </div>
//       <div className="filter-container">
//         <label>
//           <input type="radio" name="filter" value="all" checked={filter === 'all'} onChange={() => setFilter('all')} />
//           All
//         </label>
//         <label>
//           <input type="radio" name="filter" value="completed" checked={filter === 'completed'} onChange={() => setFilter('completed')} />
//           Completed
//         </label>
//         <label>
//           <input type="radio" name="filter" value="notcompleted" checked={filter === 'notcompleted'} onChange={() => setFilter('notcompleted')} />
//           Not Completed
//         </label>
//       </div>
//       <div className="tasks-container">
//         <h2>My Tasks</h2>
//         <ul className="tasks-list">{showItems()}</ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;



// p-2

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './todoRedux';
import './todo.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [inputValue, setInputValue] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [filter, setFilter] = useState('all');

  const addItem = () => {
    if (inputValue.trim() === '') {
      return;
    }
    if (editTask !== null) {
      dispatch(editTodo(editTask.index, inputValue));
      setEditTask(null);
    } else {
      dispatch(addTodo(inputValue));
    }
    setInputValue('');
    const activeFilter = document.querySelector('input[name="filter"]:checked').value;
    showItems(activeFilter);
    updateAddToListButtonText();
  };

  const handleDone = (index) => {
    dispatch(toggleTodo(index));
    const isCompleted = tasks[index].completed;
    if (filter === 'notcompleted' && isCompleted) {
      // Move the completed task to the "completed" section
      const updatedTasks = [...tasks];
      const completedTask = updatedTasks.splice(index, 1)[0];
      completedTask.completed = false;
      dispatch(addTodo(completedTask.content, false));
    }
  };

  const handleEditOrDelete = (index) => {
    tasks[index].completed ? dispatch(deleteTodo(index)) : setEditTask({ index });
    const activeFilter = document.querySelector('input[name="filter"]:checked').value;
    showItems(activeFilter);
    updateAddToListButtonText();
  };

  const showItems = (filter) => {
    const filteredTasks = tasks.filter((item) => {
      if (filter === 'completed' && !item.completed) {
        return false;
      }
      if (filter === 'notcompleted' && item.completed) {
        return false;
      }
      return true;
    });
    return filteredTasks.map((item, i) => (
      <li className="task-item" key={i}>
        <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.content}
        </span>
        <div className="button-container">
          <button className="action-button" onClick={() => handleDone(i)}>
            {item.completed ? 'Undone' : 'Done'}
          </button>
          <button className="action-button" onClick={() => handleEditOrDelete(i)}>
            {item.completed ? 'Delete' : 'Edit'}
          </button>
        </div>
      </li>
    ));
  };

  const updateAddToListButtonText = () => {
    const addToDoListButton = document.querySelector('.save-button');
    addToDoListButton.textContent = editTask !== null ? 'Save Edit' : 'Add to List';
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo List</h1>
      <div className="input-container">
        <input
          className="text-input"
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="save-button" onClick={addItem}>
          {editTask !== null ? 'Save Edit' : 'Add to List'}
        </button>
      </div>
      <div className="filter-container">
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="notcompleted"
            checked={filter === 'notcompleted'}
            onChange={() => setFilter('notcompleted')}
          />
          Not Completed
        </label>
      </div>
      <div className="tasks-container">
        <h2>My Tasks</h2>
        <ul className="tasks-list">{showItems(filter)}</ul>
      </div>
    </div>
  );
};

export default TodoApp;