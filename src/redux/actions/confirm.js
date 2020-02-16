export const confirmAccount = inputtedAccountNumber => {
  return {
    type: 'CONFIRM',
    payload: {
      inputtedAccountNumber
    }
  }
}
