
export const initialState =  {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state,action) => {
    switch(action.type) {
        case 'AddItem':
          const newItem = {
              item: action.payload,
              completed: false,
              id: Date.parse(new Date())
          }
          return {...state, todos:[...state.todos, newItem]};
        case 'completedToggler':
          return {
                ...state,
                todos: state.todos.map( item => {
                if(action.payload === item.id){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
          }) }
        case "clearCompleted":
          return {
              ...state,
              todos: state.todos.filter(item => {
                return item.completed === false
              })
          }
        default:
          return state;
      }
}