import React from 'react'
import { Link } from 'react-router-dom'

import User from '../valueObject/User'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  
  render() {
    return (
      <div>
        <form onSubmit={() => console.log(true)}>
          <label>first name</label> <br />
          <input
            onChange={e => this.setState({firstName: e.target.value})}
            value={this.state.firstName}
          /> <br />
          <label>last name</label> <br />
          <input
            onChange={e => this.setState({lastName: e.target.value})}
            value={this.state.lastName}
          /> <br />
          <button>登録</button> <br />
        </form>
        <Link to="/">トップへ</Link>
      </div>
    )
  }
}

export default Register
