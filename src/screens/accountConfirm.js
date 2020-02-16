import React from 'react'
import { Link } from 'react-router-dom'

import { confirmAccount } from '../redux/actions/confirm'
import { connect } from 'react-redux'


class AccountConfirm extends React.Component {
  state = {
    inputtedAccountNumber: ''
  }

  handleSubmit = (e, inputtedAccountNumber) => {
    e.preventDefault()

    this.props.confirmAccount(inputtedAccountNumber)
  }

  render() {
    return (
      <div>
        <label>口座番号入力</label>
        <form onSubmit={e => this.handleSubmit(e, this.state.inputtedAccountNumber)}>
          <input 
            onChange={e => this.setState({inputtedAccountNumber: e.target.value})}
            value={this.state.inputtedAccountNumber}
          /> <br />
          <button>送信</button> <br />
        </form>
        <Link to="/register">口座登録</Link>
        {this.props.confirmedAccount === false && (
          <div>
            <p>口座が存在しません</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    confirmedAccount: state.bank.confirmedAccount
  }
}

export default connect(
  mapStateToProps,
  { confirmAccount }
)(AccountConfirm)
