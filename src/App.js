import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthenticatedRoute from './components/AuthenticatedRoute';

import Main from "./components/Main";
import NewGroup from "./components/NewGroup";
import NewTasks from "./components/NewTasks";
import MyTasks from "./components/MyTasks";
import Login from "./components/Login";
import AddChore from "./components/AddChore";
import GroupList from "./components/GroupList";
import Leaderboard from "./components/Leaderboard";

import "./styles/index.scss";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <main>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <AuthenticatedRoute path="/new" exact component={NewGroup} />
      <AuthenticatedRoute path="/groups/:group/leaderboard" exact component={Leaderboard} />
      <AuthenticatedRoute path="/newchores" exact component={NewTasks} />
      <AuthenticatedRoute path="/groups" exact component={GroupList} />
      <AuthenticatedRoute path="/groups/:group/tasks" exact component={MyTasks} />
      <AuthenticatedRoute path="/groups/:group/tasks/:id" exact component={MyTasks} />
      <AuthenticatedRoute path="/groups/:group/addchore" exact component={AddChore} />
    </main>
  </Router>
);

export default App;
