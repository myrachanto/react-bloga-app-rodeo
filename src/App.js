import Navbar from './Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './pages/Create';
import Blogdetail from './pages/Blogdetail';
import Errorpage from './Errorpage';

function App() {
  // const title = 'welcome to react';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <Blogdetail/>
            </Route>
            <Route path="*">
            <Errorpage />
            </Route>
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;
