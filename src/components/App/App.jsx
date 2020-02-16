import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'
import PrivateRoute from '../PrivateRoute'
import Home from '../Home'
import Register from '../Register'
import Login from '../Login'
import ForgotPassword from '../ForgotPassword'
import ChangePassword from '../ChangePassword'
import AdvertDetail from '../AdvertDetail'
import CreateUpdateAdvert from '../CreateUpdateAdvert'
import Error404 from '../Error404'

import { store } from '../../'
import { isUserRegistered } from '../../store/selectors'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route
        path="/register"
        render={props =>
          isUserRegistered(store.getState()) ? <Redirect to="/" /> : <Register {...props} />
        }
      />
      <Route
        path="/login"
        render={props =>
          isUserRegistered(store.getState()) ? <Redirect to="/" /> : <Login {...props} />
        }
      />
      <Route
        path="/forgot-password"
        render={props =>
          isUserRegistered(store.getState()) ? <Redirect to="/" /> : <ForgotPassword {...props} />
        }
      />
      <Route
        path="/change-password/:token"
        render={props =>
          isUserRegistered(store.getState()) ? <Redirect to="/" /> : <ChangePassword {...props} />
        }
      />
      <PrivateRoute path="/advert/:id" component={AdvertDetail} />
      <PrivateRoute path="/create" component={CreateUpdateAdvert} />
      <PrivateRoute path="/update/:id" component={CreateUpdateAdvert} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute component={Error404} />
    </Switch>
  </ErrorBoundary>
)

export default App
