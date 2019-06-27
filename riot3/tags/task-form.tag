<task-form>
    
    <form onsubmit={submit}>
        <label>New Task: <input type="text" ref="task"></label>
        <button type="submit">Submit</button>
        <button onclick={clear}>Clear</button>
    </form>

    <script>
        submit(e){
            e.preventDefault()
            if(this.refs.task!='')
                this.view.add(this.refs.task.value)
        }
        clear(e){
            e.preventDefault()
            this.view.remove()
        }
    </script>
    <style>
        form{
            text-align: left;
            display: flex;
            justify-content: space-between;
            color:white;
            font-family: 'Hind Madurai', sans-serif;
            padding:.5rem .5rem .5rem .5rem;
        }
    </style>
</task-form>