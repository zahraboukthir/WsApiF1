import "./App.css";
import Navbarr from "./Components/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./Components/UserList";
import UserListAxios from "./Components/UserListAxios";
import { Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Switch>
        {/* <UserList/> */}
        <Route exact path="/" component={UserListAxios} />
        <Route
          exact
          path="/Profile/:id"
          render={(props) => <Profile {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
