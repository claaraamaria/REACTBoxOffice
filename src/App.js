import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is homezpage
      </Route>

      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>
        This is 404 oage      
      </Route>
    </Switch>
  );
}

export default App;
