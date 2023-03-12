import './index.css';
import logo from './rocket.svg';
import Navbar from './Navbar';
import Home from './Home';
function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <img src={logo} className="App-logo" alt="logo" />
      <div className ="App">
        <Home/>
      </div>
    </div>
  );
}

export default App;





// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
