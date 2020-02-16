class Deposit {
  depositToAccount(amount, account) {
    const currentAmount = account.amount
    const depositedAccount = { ...account, amount: currentAmount + amount} 

    return depositedAccount
  }
}

export default Deposit
