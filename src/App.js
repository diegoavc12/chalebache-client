import './App.css';
import MainUserPage from'./components/mainUsersApp';
import LoginAdminPage from './components/adminLogin';
import MainAdminCRUD from './components/mainAdminCrud';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {useContext, useState, useEffect} from 'react'
import { BacheContext } from './components/bacheContext'

function App() {
  const {setData} = useContext(BacheContext)
  const [loading, setLoading] = useState(false);
   useEffect(() => {
  const fetchEvents = async () => {
    setLoading(true);
    const rawData = await fetch("https://chalebache-json-server.herokuapp.com/potholes");
    const info = await rawData.json()
    setData(info);
    setLoading(false);
  }
  fetchEvents();
   }, [])
  return (
    <div className="App">
        {!loading && <Router>
          <Switch>
            <Route exact path='/login'>
              <LoginAdminPage></LoginAdminPage>
            </Route>
            <Route exact path='/'>
              <MainUserPage></MainUserPage>
            </Route>
            <Route exact path='/admins'>
              {/* {!loading && <MainAdminCRUD/>} */}
              <MainAdminCRUD/>
            </Route>
         {/*<Route exact path='/tutorial'>
              <Tutorial/>
            </Route>*/}
          </Switch>
		 </Router>}
      </div>
  );
}

export default App;