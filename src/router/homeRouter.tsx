import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from '../page/home';
import { Fragment } from 'react';
import Navbar from '../components/fragments/Navbar';
import TambahPage from '../page/tambah';
import UpdatePage from '../page/updateAnggota';

const HomeRouter: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" Component={HomePage} />
        <Route path="/add" Component={TambahPage} />
        <Route path="/edit/:id" Component={UpdatePage} />
      </Switch>
    </Fragment>
  );
};

export default HomeRouter;
