import Register from '../../factory/Register'

import Confirm from '../../service/Confirm'

import history from '../../history'

const initialState = {
  cards: [],
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
        cards: state.cards.concat(newUser.card),
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

    default:
      return state
  }
}
