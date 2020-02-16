class Withdraw {
  withdrawFromAccount(amount, account) {
    const currentAmount = account.amount
    const withdrawedAcount = { ...account, amount: currentAmount - amount }

    return withdrawedAcount
  }
}

export default Withdraw
