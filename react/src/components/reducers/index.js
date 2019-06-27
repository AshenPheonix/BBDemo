import {ADD_TASK, REMOVE_TASK, TOGGLE_TASK, REMOVE_COMPLETED} from '../actions'
import tasks from '../../dbs/tasks'

const initialState={todos:tasks}

export default (state=initialState,action)=>{
    let temp={...state};
    switch(action.type){
        case ADD_TASK:
            temp.todos=temp.todos.concat({
                task:action.task,
                id:Math.round(Math.random()*10000000+1),
                completed:false
            })
            break;
        case REMOVE_TASK:
            temp.todos=temp.todos.filter(i=>i.id!==action.task)
            break;
        case TOGGLE_TASK:
            temp.todos=temp.todos.map(i=>i.id===action.task?{...i,completed:!i.completed}:i)
            break;
        case REMOVE_COMPLETED:
            temp.todos=temp.todos.filter(i=>!i.completed)
            break;
        default:
            return state
    }
    return temp
}