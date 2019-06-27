export const ADD_TASK="ADD_TASK"
export const REMOVE_TASK="REMOVE_TASK"
export const TOGGLE_TASK='TOGGLE_TASK'
export const REMOVE_COMPLETED='REMOVE_COMPETED'

export const addTask=e=>{
    return {type:ADD_TASK,task:e}
}

export const removeTask=e=>{
    return {type:REMOVE_TASK,task:e}
}

export const toggleTask=e=>{
    return {type:TOGGLE_TASK,task:e}
}

export const removeCompleted=e=>{
    return {type:REMOVE_COMPLETED}
}