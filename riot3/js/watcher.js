
import List from '../dbs/tasks.js'
export default class watcher{
    constructor(){
        riot.observable(this)

        this.tasks=List
        this.login=false
        
        this.on('listUpdate',()=>{
            localStorage.setItem('tasks',JSON.stringify(this.tasks))
        })
    }

    add=item=>{
        this.tasks.push({
            task:item,
            id:Math.round(Math.random()*100000 + 1),
            completed:false
        })
        this.trigger('listUpdate')
    }

    edit=id=>{
        this.tasks=this.tasks.map(item=>item.id==id?{...item,completed:!item.completed}:item)
        this.trigger('listUpdate')
    }

    remove=()=>{
        this.tasks=this.tasks.filter(task=>!task.completed)
        this.trigger('listUpdate')
    }
}