import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./components/accueil/Accueil";
import Films from "./components/films/Films";
import Series from "./components/series/Series";
import Erreur from "./components/erreur/Erreur";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/:erreur" component={Erreur} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
