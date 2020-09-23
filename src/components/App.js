import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import SignIn from './screens/SignIn'
import Products from './screens/Products'
import Home from './screens/Home'
import Game from './screens/Game'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { screens: 'Home' }
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <ul className="menu">
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/products/5">Product 5</Link></li>
          </ul>

          <Switch>
            <Route exact path="/signin"><SignIn /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/products"><Products /></Route>
            <Route exact path="/game"><Game /></Route>
            <Route exact path="/products/15"><Products />
              <h2>+ iva</h2>
            </Route>
            <Route exact path="/products/:id"><Products />
              <h2>Alfajor 50</h2>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
