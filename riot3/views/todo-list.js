riot.tag2('todo-list', '<h3>Hello {view.user}</h3> <task if="{view.tasks}" each="{task in view.tasks}" data="{task}"></task>', 'todo-list{ border-bottom:2px white ridge; height:500px; width:550px; overflow:scroll; display:block; margin:.25rem; }', '', function(opts) {

        this.on('route',()=>{
            if(localStorage.getItem('tasks')){
                this.view.tasks=JSON.parse(localStorage.getItem('tasks'))
                this.update();
            }
        })

        this.view.on('listUpdate',()=>{
            route('/')
            this.update()
        })
});