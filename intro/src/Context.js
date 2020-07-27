import React, { Component } from 'react'

const userContext = React.createContext();
//Provider, Cunsumer
const reducer = (state, action) => {
    switch (action.type) {
        case "Delete User":
            return {
                ...state,  //  ...state   bu yazı state içindəkiləri olduğu kimi kopy edir
                users: state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [{
            id: 1,
            name: "Vaqif",
            department: "IT",
            salary: "7000"
        },
        {
            id: 2,
            name: "Samir",
            department: "Dizayn",
            salary: "8000"
        },
        {
            id: 3,
            name: "Intiqam",
            department: "Marketing",
            salary: "9000"
        }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <userContext.Provider value={this.state}>
                {this.props.children}
            </userContext.Provider>
        )
    }
}

const UserConsumer = userContext.Consumer;
export default UserConsumer;