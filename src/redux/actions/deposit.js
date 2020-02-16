export const deposit = amount => {
  return {
    type: 'DEPOSIT',
    payload: {
      amount,
    }
  }
}
