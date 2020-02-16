import React from 'react'
import { connect } from 'react-redux'

import { deposit } from '../redux/actions/deposit'
import { withdraw } from '../redux/actions/withdraw'

class Menu extends React.Component { 
  state = {
    depositAmount: '',
    withdrawAmount: ''
  }

  handleDeposit = (e, amount) => {
    e.preventDefault()

    this.props.deposit(amount)
  }

  handleWithdraw = (e, amount) => {
    e.preventDefault()

    this.props.withdraw(amount)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleDeposit(e, Number(this.state.depositAmount))}>
          <label>預け入れ</label>
          <input 
            onChange={e => this.setState({depositAmount: e.target.value})}
            value={this.state.depositAmount}
          />
          <button>送信</button>
        </form> <br />
        <form onSubmit={e => this.handleWithdraw(e, Number(this.state.withdrawAmount))}>
          <label>引き出す</label>
          <input 
            onChange={e => this.setState({withdrawAmount: e.target.value})}
            value={this.state.withdrawAmount}
          />
          <button>送信</button>
        </form> <br />
      </div>
    )
  }
}

export default connect(
  null,
  { deposit, withdraw }
)(Menu)
