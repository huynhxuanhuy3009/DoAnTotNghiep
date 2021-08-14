import {Action} from './types' 

export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function createTask(data: object | any): Action  {
    return{
        type: CREATE_TASK, 
        todoList: data,
    }
}

export function deleteTask(data: object | any): Action  {
    return{
        type: DELETE_TASK, 
        todoList: data,
    }
}