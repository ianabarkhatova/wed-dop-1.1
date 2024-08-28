import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";


export type AddTodolistActionType = ReturnType<typeof addTodolistAC>




type ActionsType = AddTodolistActionType

const initialState: Array<TodolistType> =  []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    debugger
    switch (action.type) {
        case 'АDD-TODOLIST': {
            debugger
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }, ...state]
        }
        default:
            return state;
    }
}


export const addTodolistAC = (title: string) => {
    debugger
    return ({ type: 'АDD-TODOLIST', title: title, todolistId: v1()} as const)
}

