<navigation>
    
    <section onclick={home}>List</section>
    <section onclick={add}>Add</section>
    <section onclick={logout}>Logout</section>
    
    <script>
        home(e){
            route('/', 'Task List')
        }
        add(e){
            route('/add','Add A Task')
        }
        logout(e){
            this.view.login=false
            this.view.user=null
            route('/')
            this.view.trigger('log')
        }
    </script>
    <style>
        navigation{
            display:flex;
            justify-content:center;
        }
        section{
            margin:.5rem;
            border:2px groove white;
            background-color:darkslategray;
            padding:1rem;
            cursor:pointer;
        }
    </style>
</navigation>