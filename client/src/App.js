import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <Topbar/>
      <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/register">
            {user ? <Home/> : <Register />}
          </Route>

          <Route path="/login">
            {user ? <Home/> : <Login />}
          </Route>

          <Route path="/write">
            {user ? <Write/> : <Register />}
          </Route>

          <Route path="/settings">
            {user ? <Settings/> : <Register />}
          </Route>

          <Route path="/post/:postId">
            <Single />
          </Route>

      </Switch>
    </>
  );
}

export default App;
