import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from '../page/home';
import { Fragment } from 'react';
import Navbar from '../components/fragments/Navbar';
const HomeRouter: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" Component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default HomeRouter;
