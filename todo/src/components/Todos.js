import React, {useReducer, useState} from 'react'
import {reducer, initialState} from '../reducers/reducer'
import Todo from './Todo'

function Todos() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState("");

    const AddItem = e => {
        e.preventDefault()
        dispatch({type: "AddItem", payload: inputValue  })
        setInputValue("")
    }
    const handleChanges = e => {
        setInputValue(e.target.value);
        console.log(inputValue)
      };
    const completedToggler = id => {
        dispatch({type: "completedToggler", payload: id})
        console.log(state)
    }
    const clearCompleted = () => {
        dispatch({type: "clearCompleted"})
    }
    return (
        <div>
            <p>Todos</p>
            {state.todos.map(todo => <Todo toggler={completedToggler} key={todo.id} data={todo} />)}
            <hr />
            <form>
                <h2>Add an Item:</h2>
                <input name="todo" value={inputValue} onChange={handleChanges} placeholder="New Todo" />
                <button onClick={AddItem}>Add</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default Todos
