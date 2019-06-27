<login>
    <fieldset>
        <legend>
            Login
        </legend>
        <form onsubmit={login}>
            <label for="username">Username: <input type="text" ref="username" placeholder="username"></label>
            <button onclick={login}>Login</button>
        </form>
    </fieldset>

    <script>
        login(e){
            e.preventDefault()
            if(this.refs.username.value!==''){
                this.view.login=true
                this.view.user=this.refs.username.value
                this.view.trigger('log')
            }
        }
    </script>
    
    <style>
        fieldset{
            margin:1rem;
            border-size:2px;
        }
        form{
            display:flex;
            flex-direction:column;
        }
        button{
            border-color:white;
            background-color:darkslategray;
            color:white;
            margin:1rem auto 0;
        }
    </style>
</login>