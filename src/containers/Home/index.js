import React from 'react';
import Login from '../../component/Login/index';
import PropTypes from 'prop-types';
 
class Home extends React.Component {

  render(){
    const { history } = this.props;
    return(
      <div>
        <Login history={history} />
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;