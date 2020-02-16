class Confirm {

  confirmAccount(inputtedAccountNumber, accounts) {
    const confirmedAccount = accounts.find(account => account.accountNumber === inputtedAccountNumber)
    if(!confirmedAccount) return false 

    return confirmedAccount
  }
}

export default Confirm
