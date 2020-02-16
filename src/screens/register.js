import React from 'react'
import { Link } from 'react-router-dom'

import { registerAction } from '../redux/actions/register'

import { connect } from 'react-redux'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    initialAmount: '',
  }

  handleSubmit = (e, initialInfo) => {
    e.preventDefault()

    this.props.registerAction(initialInfo)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
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
          <label>initial amount</label> <br />
          <input
            onChange={e => this.setState({initialAmount: e.target.value})}
            value={this.state.initialAmount}
          /> <br />
          <button>登録</button> <br />
        </form>
        <Link to="/">トップへ</Link>
        {this.props.newCard && (
          <div>
            <label>あなたのカード情報です 大事に控えてください</label>
            <p>口座番号: {this.props.newCard.accountNumber}</p>
            <p>発行日: {this.props.newCard.issued}</p>
            <p>氏名: {this.props.newCard.userInfo.firstName} {this.props.newCard.userInfo.lastName}</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newCard: state.bank.newCard
  }
}

export default connect(
  mapStateToProps,
  { registerAction }
)(Register)
