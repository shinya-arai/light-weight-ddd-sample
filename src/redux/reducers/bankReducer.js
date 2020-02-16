import Register from '../../factory/Register'

import Confirm from '../../service/Confirm'
import Deposit from '../../service/Deposit'
import Withdraw from '../../service/Withdraw'

import history from '../../history'

const initialState = {
  accounts: [],
  newCard: null,
  confirmedAccount: null
}

export default (state = initialState, action) =>  {
  switch(action.type) {
    case 'REGISTER':
      const newUser = new Register(action.payload.initialInfo)

      return {
        ...state,
        accounts: state.accounts.concat(newUser.account),
        newCard: newUser.card
      }

    case 'CONFIRM':
      const confirmedAccount = new Confirm().confirmAccount(action.payload.inputtedAccountNumber, state.accounts)
      confirmedAccount && history.push('/menu') 

      return {
        ...state,
        confirmedAccount: confirmedAccount 
      }

    case 'DEPOSIT':
      const depositedAccount = new Deposit().depositToAccount(action.payload.amount, state.confirmedAccount)

      return {
        ...state,
        accounts: state.accounts.map(account => account.accountNumber === depositedAccount.accountNumber ? depositedAccount : account),
        confirmedAccount: depositedAccount
      }

    case 'WITHDRAW':
      const withdrawedAccount = new Withdraw().withdrawFromAccount(action.payload.amount, state.confirmedAccount)

      return {
        ...state,
        accounts: state.accounts.map(account => account.accountNumber === withdrawedAccount.accountNumber ? withdrawedAccount : account),
        confirmedAccount: withdrawedAccount
      }

    default:
      return state
  }
}
