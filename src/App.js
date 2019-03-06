import React, { Component } from 'react';

import NavBar from './components/nav-bar';
import Presentation from './components/presentation';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar> </NavBar>
        </div>
        <div>
          <Presentation> </Presentation>
        </div>
      </div>
    );
  }
}

export default App;
