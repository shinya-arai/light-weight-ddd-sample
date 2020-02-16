class AccountNumber {
  constructor() {
    this.accountNumber = ("0000000" + Math.floor(Math.random() * 10000000)).slice(-7)
  }

  get makeAccountNumber() {
    return this.accountNumber
  }
}

export default AccountNumber
