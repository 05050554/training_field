import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../counter/counterSlice';
import taskReducer from '../todolist/ToDoListSlice'

export default configureStore({
    reducer:{
        counter: counterReducer,
        task: taskReducer
    },

})

// export default combineReducers({
//     counter:counterReducer,

// });