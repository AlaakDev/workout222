import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import WorkoutList from './components/WorkoutList';
import WorkoutDetail from './components/WorkoutDetail';
import GoalList from './components/GoalList';
import GoalDetail from './components/GoalDetail';
import AboutUs from './components/AboutUs';

const App = () => (
  
   <>
  
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserDetail} />
        <Route exact path="/workouts" component={WorkoutList} />
        <Route path="/workouts/:workoutId" component={WorkoutDetail} />
        <Route exact path="/goals" component={GoalList} />
        <Route path="/goals/:goalId" component={GoalDetail} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
   </>
 
);

export default App;