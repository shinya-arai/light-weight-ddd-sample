import Card from '../entity/Card'
import Account from '../entity/Account'

import AccountNumber from '../service/AccountNumber'

class Register {
  constructor({firstName, lastName, initialAmount}) {
    this.accountNumberService = new AccountNumber()

    this.card = new Card(firstName, lastName, this.accountNumberService.makeAccountNumber)
    this.account = new Account(Number(initialAmount), this.accountNumberService.makeAccountNumber)
  }
}

export default Register
