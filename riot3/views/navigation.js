riot.tag2('navigation', '<section onclick="{home}">List</section> <section onclick="{add}">Add</section> <section onclick="{logout}">Logout</section>', 'navigation{ display:flex; justify-content:center; } navigation section,[data-is="navigation"] section{ margin:.5rem; border:2px groove white; background-color:darkslategray; padding:1rem; cursor:pointer; }', '', function(opts) {
        this.home = function(e){
            route('/', 'Task List')
        }.bind(this)
        this.add = function(e){
            route('/add','Add A Task')
        }.bind(this)
        this.logout = function(e){
            this.view.login=false
            this.view.user=null
            route('/')
            this.view.trigger('log')
        }.bind(this)
});