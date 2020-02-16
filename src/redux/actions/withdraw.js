export const withdraw = amount => {
  return {
    type: 'WITHDRAW',
    payload: {
      amount
    }
  }
}
