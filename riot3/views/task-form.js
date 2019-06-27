riot.tag2('task-form', '<form onsubmit="{submit}"> <label>New Task: <input type="text" ref="task"></label> <button type="submit">Submit</button> <button onclick="{clear}">Clear</button> </form>', 'task-form form,[data-is="task-form"] form{ text-align: left; display: flex; justify-content: space-between; color:white; font-family: \'Hind Madurai\', sans-serif; padding:.5rem .5rem .5rem .5rem; }', '', function(opts) {
        this.submit = function(e){
            e.preventDefault()
            if(this.refs.task!='')
                this.view.add(this.refs.task.value)
        }.bind(this)
        this.clear = function(e){
            e.preventDefault()
            this.view.remove()
        }.bind(this)
});