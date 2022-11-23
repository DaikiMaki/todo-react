import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import List from './components/List';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ?
        <div>
          <SignOut />
          <List />
        </div>
        : 
        <SignIn />}
    </div>
  );
}

export default App;
