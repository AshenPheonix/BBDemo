riot.tag2('task', '<section> {opts.data.task} </section> <section> <input type="checkbox" refs="competed" checked="{opts.data.completed}"> </section>', '@import url(\'https://fonts.googleapis.com/css?family=Hind+Madurai&display=swap\'); task{ display:flex; justify-content:space-between; padding:.5rem; font-family: \'Hind Madurai\', sans-serif; background-color:darkslategray; color:white; text-align: right; border-radius: 10px 0 0 10px; border: 2px lightgray ridge; margin:.3rem; width:500px; } task.completed{ text-decoration:line-through; background-color:darkred; } task:hover{ cursor:pointer; }', 'class="{completed: opts.data.completed}" onclick="{toggle}"', function(opts) {
        this.toggle = function(e){
            this.view.edit(this.opts.data.id)
        }.bind(this)
});