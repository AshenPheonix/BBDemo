//tag imports
import '../views/todo.js'
import '../views/todo-list.js'
import '../views/task-form.js'
import '../views/task.js'
import '../views/login.js'
import '../views/navigation.js'

import watcher from './watcher.js'

riot.mixin({view: new watcher})

riot.mount('todo')