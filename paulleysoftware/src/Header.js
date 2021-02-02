import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';

export const Header = () => {
    return (
        <Router>

          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a class="navbar-brand" href="./index.html">Paulley Software</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
            </nav>
      
        </Router>
    )
}

export default Header;