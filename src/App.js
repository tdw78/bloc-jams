import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Navbar } from 'reactstrap';




class App extends Component {
  render() {
    const headerStyles = {
      color: "#352B3D",
      fontFamily: "Georgia",
      fontSize: 120,
      paddingTop: 4,
      paddingBottom: 4,
      paddingRight: 16,
      paddingLeft: 16,
      letterSpacing: 12,
      wordSpacing: 34
    }

    const buttonStyles = {
      color: "#3A3042",
      fontFamily: "Georgia",
      fontWeight: "bold",
      fontSize: 19,
      letterSpacing: 2
    }

    return (
      <div className="App" style={{backgroundColor: "#F0EBA6" }}>
        <Navbar color="#F0EBA6" dark expand="xs" className="mb-12">
          <nav>
            <div class="row">
              <ul class="nav-item">
                <Link to='/' style={buttonStyles}>Home</Link>
              </ul>
              <ul class="nav-item">  
                <Link to='/library' style={buttonStyles}>Library</Link>
              </ul>
            </div>
          </nav>
        </Navbar>
        
          <header>
            <span class="text-uppercase" style={headerStyles}>Bloc Jams</span>
          </header>
        
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>

      </div>
   
    );
  }
}

export default App;
