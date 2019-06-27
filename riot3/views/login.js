riot.tag2('login', '<fieldset> <legend> Login </legend> <form onsubmit="{login}"> <label for="username">Username: <input type="text" ref="username" placeholder="username"></label> <button onclick="{login}">Login</button> </form> </fieldset>', 'login fieldset,[data-is="login"] fieldset{ margin:1rem; border-size:2px; } login form,[data-is="login"] form{ display:flex; flex-direction:column; } login button,[data-is="login"] button{ border-color:white; background-color:darkslategray; color:white; margin:1rem auto 0; }', '', function(opts) {
        this.login = function(e){
            e.preventDefault()
            if(this.refs.username.value!==''){
                this.view.login=true
                this.view.user=this.refs.username.value
                this.view.trigger('log')
            }
        }.bind(this)
});