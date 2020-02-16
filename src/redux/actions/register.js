export const registerAction = initialInfo => {
  return {
    type: 'REGISTER',
    payload: {
      initialInfo
    }
  }
}
