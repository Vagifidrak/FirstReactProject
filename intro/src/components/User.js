import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from '../Context';

class User extends Component {

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch, e) => {
        const { id } = this.props;
        //Consumer Dispatch
        dispatch({ type: "Delete User", payload: id });
    }

    state = {
        isVisible: false                 //State Constratsiz verilmesinin 2ci üsulu budu
    }

    render() {

        //Distructing
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;                   //Burda tanıdılır isVisible istifadə üçün

        return (<UserConsumer>
            {
                value => {
                    const { dispatch } = value;

                    return (
                        <div className="col-md-8 mb-4" >
                            <div className="card" style={isVisible ? null : { backgroundColor: "#12348e", color: "white" }}>
                                <div className="card-header d-flex justify-content-between" >
                                    <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>{name}</h4>
                                    <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fas fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                </div>
                                {
                                    isVisible ?                                    //Şərt veririk görünməsi üçün   nüm: isVisible ? __ : null
                                        <div className="card-body">
                                            <p className="card-text">
                                                Maaş : {salary}
                                            </p>
                                            <p className="card-text">
                                                Departament : {department}
                                            </p>
                                        </div> : null
                                }
                            </div>
                        </div>
                    )
                }
            }

        </UserConsumer>)





    }
}
User.propTypes = {
    name: propTypes.string.isRequired,
    department: propTypes.string.isRequired,
    salary: propTypes.string.isRequired,
}
User.defaultProps = {
    name: "Melumat yoxdur",
    department: "Melumat yoxdur",
    salary: "Melumat yoxdur"
}

export default User;