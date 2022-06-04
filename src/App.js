import React from "react"
import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import rootReducer from "./reduser/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension"



const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(),
)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/movies" component={Movies}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;


// const defaultState = {
//     welcome: "Hi",
//     otherState: "some stuff"
// }
//
// const greeting = (state = defaultState, action) => {
//     switch (action.type) {
//         case "GREET_ME":
//             return {...state, welcome: "Hello "+action.name+"!"}
//         case "GREET_WORLD":
//             return {...state, welcome: "Hello World"}
//         default:
//             return state
//     }
// }
//
// const store = createStore(greeting)
// console.log("Store ", store.getState());
//
// const name="Viki"
// store.dispatch({
//     type:"GREET_ME",
//     name
// })
// console.log("Store ", store.getState());



