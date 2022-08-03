import { createSlice } from "@reduxjs/toolkit";


export const toDoSlice = createSlice({
    name : 'task',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            const newTask={
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        
        deleteTask:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload.id);
        }

    },

})

export const {addTask,deleteTask} = toDoSlice.actions

export default toDoSlice.reducer