<todo>
    <router if={view.login}>
        <navigation />
        <route path="/add">
            <task-form />
        </route>
        <route path="/">
            <todo-list />
        </route>
        <route path="">
            <todo-list />
        </route>
    </router>
    <login if={!view.login} />

    <script>
        this.view.on('log',()=>{
            this.update()
        })
        route.base('')
    </script>
    
    <style>
        todo{
            display:block;
            background-color:black;
            border:2px ridge white;
            border-radius:10px 0 10px 10px;
            width:560px;
            margin:auto;
            color:white;
            box-shadow: 2px 2px 4px gray;
        }
    </style>

</todo>