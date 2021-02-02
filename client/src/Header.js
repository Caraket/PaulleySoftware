import { Link } from 'react-router-dom';

export const Header = () => {
    return (

      
          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a class="navbar-brand" href="./index.html">Paulley Software</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <Link to="/" className="nav-link">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
            </nav>
    )
}

export default Header;