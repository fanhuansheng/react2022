// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.<br/>
//           this is my first react
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React,{Component} from "react";
import Hello from "./components/hello/hello.jsx";
import Home from './components/home'
class App extends Component{
  state={
    name:'小明'
  }

  render(){
    const {name} = this.state
    return(
      <div>
        <Hello></Hello>
      i am is app.js，{name}
        <Home/>
    </div>)
  }
}

export default App;
