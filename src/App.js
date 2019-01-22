import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    const headerStyles = {
      color: "#DAA520",
      backgroundColor: "#800000",
      fontFamily: "Georgia",
      fontSize: 120,
      paddingTop: 4,
      paddingBottom: 4,
      paddingRight: 16,
      paddingLeft: 16,
      letterSpacing: 12,
      wordSpacing: 24
    }

    const buttonStyles = {
      color: "#0000CD",
      fontFamily: "Georgia",
      fontWeight: "bold",
      fontSize: 12,
      backgroundColor: "#ADD8E6",
      letterSpacing: 2
    }

    return (
      <div className="App">
        <header>
          <span class="text-uppercase" style={headerStyles}>Bloc Jams</span>
          <nav>
            <Link to='/' class="btn btn-outline-danger btn-sm" style={buttonStyles}>Home</Link>
            <Link to='/library' class="btn btn-outline-danger btn-sm" style={buttonStyles}>Library</Link>
         </nav>
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
