import './style.css';
import React from 'react';


class Products extends React.Component {

    constructor(props) {

        super(props)
        this.state = { users: [] }

    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }

    renderUsers() {
        const users = this.state.users
        return users.map(user => (
            <li>
                <h2>{user.name.first} {user.name.last}</h2>
                <a href={'mailto:' + user.email}>{user.email}</a>
                <p>Gender: {user.gender}</p>
                <img src={user.picture.medium} alt="user" />
            </li>
        ))

    }

    render() {

        return (
            <div className="Products">
                <h1>Products</h1>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default Products;
