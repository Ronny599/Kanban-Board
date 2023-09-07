import { FC } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/AddTask">
            <AddTask />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </>
  );
};
