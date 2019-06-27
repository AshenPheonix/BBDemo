import React, { Component as C } from 'react'
import './Todo.css'
import {toggleTask} from '../actions'
import { connect } from 'react-redux'


class Task extends C {
    render() {
        let classlist='todo'
        if(this.props.completed)
            classlist+=' complete'
        return (
            <section 
                onClick={ ()=> this.props.toggleTask(this.props.id) }
                className={classlist}
            >
                { this.props.task }
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    toggleTask
}


export default connect(mapStateToProps, mapDispatchToProps)(Task)