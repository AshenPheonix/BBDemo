import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTask,removeCompleted} from '../actions'


class Drawer extends Component {
    state={
        name:''
    }

    formChange=e=>{
        this.setState({name:e.target.value})
    }

    submit=e=>{
        e.preventDefault();
        this.props.addTask(this.state.name)
        this.setState({name:''})
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    New Task: 
                    <input type="text" onChange={this.formChange} value={this.state.name} placeholder="New Task" />
                </label>
                <section>
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                    <button onClick={()=>this.props.removeCompleted()} type="button">Clear Completed</button>
                </section>
            </form>
        )
    }
}

export default connect(null, {addTask,removeCompleted})(Drawer)