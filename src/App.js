import './App.css';
import MainUserPage from'./components/mainUsersApp';
import LoginAdminPage from './components/adminLogin';
import MainAdminCRUD from './components/mainAdminCrud';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login'>
              <LoginAdminPage></LoginAdminPage>
            </Route>
            <Route exact path='/'>
              <MainUserPage></MainUserPage>
            </Route>
            <Route exact path='/admins' component={MainAdminCRUD}>
              <MainAdminCRUD/>
            </Route>
          </Switch>
        </Router>

        
      
      
      
    </div>
  );
}

export default App;
