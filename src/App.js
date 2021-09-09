import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    < div className="App" >
      <Switch>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
