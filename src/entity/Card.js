import User from '../valueObject/User'

class Card {
  constructor(firstName, lastName, accountNumber) {
    this.accountNumber = accountNumber 
    this.issued = new Date()
    this.userInfo = new User(firstName, lastName)
  }
}

export default Card
