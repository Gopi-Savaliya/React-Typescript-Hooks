import { useReducer } from "react";

type CouterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    value: number
}

type ResetAction = {
    type: 'reset'
}

type CouterAction = UpdateAction | ResetAction

const initialState = {count: 0};

function reducer(state: CouterState, action: CouterAction) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.value};
    case 'decrement':
      return {count: state.count - action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement by 5</button>
        <br/>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </>
    );
}

export default Counter