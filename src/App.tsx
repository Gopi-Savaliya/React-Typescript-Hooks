import './App.css';
// State
// import Counter from './components/state/Counter';
// import Login from './components/state/Login';
// import User from './components/state/User';

//Context
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import Box from './components/context/Box';
// import { UserContextProvider } from './components/context/UserContext';
// import User from './components/context/User';

//Ref
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';

function App() {
  return (
    <div className="App">
      {/* State */}
      {/* <Login />
      <hr/>
      <User />
      <hr />
      <Counter /> */}

      {/* Context */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* Ref */}
      <DomRef />
      <hr/>
      <MutableRef />
    </div>
  );
}

export default App;
