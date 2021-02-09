export default function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        if (!action.payload) {
          return state;
        }
        if (state.todos.includes(action.payload)) {
          return state;
        }
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case "EDIT_TODO":
        if (!action.payload) {
          return state;
        }
        return {
          ...state,
          todos: [...state.todos]
        };
      case "COMPLATE":
        return state;

      case "DELETE":
        return {
          ...state,
          todos: state.todos.filter(t => t !== action.payload)
        };
      default:
        return state;

    }
  }
  