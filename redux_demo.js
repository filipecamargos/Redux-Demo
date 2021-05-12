//Import redux
const redux = require('redux');

//Creating a reducer function to get the old state and the action to be dispatched
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    };
}

//create a central store to manage some data with the reducer function
const store = redux.createStore(counterReducer);

//inital state
console.log(store.getState());

//create the subscription
const counterSubscriber = () => {
   const latestState = store.getState();
   console.log(latestState);
}

//create the subscription
store.subscribe(counterSubscriber);

