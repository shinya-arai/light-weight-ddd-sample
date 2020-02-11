import Card from '../entity/Card'
import Account from '../entity/Account'

import AccountNumber from '../service/AccountNumber'

class Register {
  constructor(firstName, lastName, initialAmount) {
    this.accountNumber = new AccountNumber()

    this.card = new Card(firstName, lastName, this.accountNumber.makeAccountNumber())
    this.account = new Account(initialAmount, this.accountNumber.makeAccountNumber())
  }
}

export default Register
