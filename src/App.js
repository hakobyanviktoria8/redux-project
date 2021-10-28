import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";

const hello = () => ("hello")
const store = createStore(hello)

function App() {
    return (
        <Provider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
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



