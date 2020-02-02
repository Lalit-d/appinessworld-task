import React, { Component } from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Home from './containers/Home/index';
import EmployeeList from './containers/EmployeeList';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
          <Router>
            <div>
              <Route exact path ="/" component={Home} />
              <Route exact path ="/employee-list" component={EmployeeList} />
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
