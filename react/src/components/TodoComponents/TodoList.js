// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'
import { connect } from 'react-redux'

class List extends Component {
    render() {
        return (
            <section className="wrapper">
                <section className="task-list">
                    {this.props.todos.map((task)=>(
                        <Todo
                            completed={task.completed}
                            task={task.task}
                            key={task.id}
                            id={task.id}
                            edit={this.props.edit}
                        />
                    ))}
                </section>
                <TodoForm />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    todos:state.todos
})


export default connect(mapStateToProps, {})(List)