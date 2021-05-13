//Import redux
const redux = require("redux");

//Creating a reducer function to get the old state and the action to be dispatched
const counterReducer = (state = { counter: 0 }, action) => {
  //Can check for the action dispatched
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'double') {
    return {
      counter: state.counter * 2,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  //Else default state is returned
  return state;
  
};

//create a central store to manage some data with the reducer function
const store = redux.createStore(counterReducer);

//inital state
console.log(`Initial State: ${store.getState().counter}`);

//create the subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(`After dispatch State: ${latestState.counter}`);
};

//create the subscription
store.subscribe(counterSubscriber);

//create and dispatch an action and cause the subscription function to run again
store.dispatch({
  type: "increment",
});

//another action can be dispatched
store.dispatch({
  type: 'double',
})

//another action can be dispatched
store.dispatch({
  type: 'decrement',
})
