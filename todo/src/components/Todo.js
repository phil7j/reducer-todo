import React from 'react'

function Todo(props) {
    return (
        <div onClick={()=> props.toggler(props.data.id) }>
            <hr/>
            <p className={props.data.completed === true ? "completed" : null}>{props.data.item}</p>

        </div>
    )
}

export default Todo
