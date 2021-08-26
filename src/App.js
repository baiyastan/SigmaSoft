
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home'
import Aero from './pages/aero/Aero'
import Kundoluk from './pages/kundoluk/Kundoluk'
import ErkaBereke from './pages/erka-bereke/ErkaBereke';

function App() {
  return (
    <Router>
                <div >
                    <Switch>
                        
                        <Route path="/aero">
                            <Aero />
                        </Route>
                        <Route path="/erka-bereke">
                            <ErkaBereke />
                        </Route>
                        <Route path="/kundoluk">
                            <Kundoluk />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
  );
}

export default App;
