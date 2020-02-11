class AccountNumber {
  constructor() {
    this.accountNumber = String(Math.random())
  }

  get makeAccountNumber() {
    return this.accountNumber
  }
}

export default AccountNumber
