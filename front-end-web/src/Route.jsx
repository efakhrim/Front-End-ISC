/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';

import App from './App.jsx'
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import IncubaControl from './pages/IncubaControl.jsx';
import History from './pages/History.jsx';
import Auth from './auth/Auth.jsx';
import EditList from './components/EditList.jsx';
import MonitorDetail from './components/Charts.jsx';



const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/monitoring" component={Monitoring} />
          <Route path="/control" component={IncubaControl} />
          <Route path="/history" component={History} />
          <Route path="/editlist/:incubator_id" component={EditList} />
          <Route path="/detailview/:baby_id" component={MonitorDetail} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Main;

