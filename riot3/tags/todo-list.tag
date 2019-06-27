<todo-list>
   
    <h3>Hello {view.user}</h3>
    <task if={view.tasks} each={task in view.tasks} data={task}/>

    <script>
        
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
    </script>

    <style>

        todo-list{
            border-bottom:2px white ridge;
            height:500px;
            width:550px;
            overflow:scroll;
            display:block;
            margin:.25rem;
        }
        
    </style>

</todo-list>