import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointments from "./pages/Appointment/Appointments/Appointments";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointments></Appointments>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
