import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { listEmployee } from "../../actions/employee";
 
class EmployeeList extends React.Component{
  componentDidMount() {
    const { listEmployee } = this.props;
    listEmployee(); 
  }

  render(){
    const {  employeeList } = this.props;

    return(
      <div>
        {employeeList && employeeList.length ? 
            <table>
              <tbody>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone No.</th>
            </tr>
            {employeeList.map(employee => {
                return(
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNo}</td>
                  </tr>
                )})}
              </tbody>
           </table>:
           <div> No Employees available </div>
        }
      </div>

    )
  }
}

EmployeeList.propTypes = {
  employeeList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  employeeList: state.employee.employeeList,
});
  
export default connect( mapStateToProps, {listEmployee})(EmployeeList);
