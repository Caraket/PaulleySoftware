import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={ Landing } />
    </div>
    <Switch>
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/contact" component={ Contact } />
    </Switch>
    </Router>
  );
}

export default App;
