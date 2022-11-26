import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import List from './components/List';
import Create from './components/Create';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ?
      <>
        <SignOut /> 
        <Create />
        <List />
      </>
      : 
      <SignIn />
      }
    </div>
  );
}

export default App;
