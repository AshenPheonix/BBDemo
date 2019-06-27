riot.tag2('todo', '<router if="{this.view.login}"> <navigation></navigation> <route path="/add"> <task-form></task-form> </route> <route path="/"> <todo-list></todo-list> </route> <route path=""> <todo-list></todo-list> </route> </router> <login if="{!this.view.login}"></login>', 'todo{ display:block; background-color:black; border:2px ridge white; border-radius:10px 0 10px 10px; width:560px; margin:auto; color:white; box-shadow: 2px 2px 4px gray; }', '', function(opts) {
        this.view.on('log',()=>{
            this.update()
        })
        route.base('')
});