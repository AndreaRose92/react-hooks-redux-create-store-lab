
function createStore() {
  let state;

  function dispatch(action) {
    state = candyReducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  return { dispatch, getState }

}

let store = createStore()
store.dispatch({ type: "@@INIT" })

function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

export { createStore, candyReducer }