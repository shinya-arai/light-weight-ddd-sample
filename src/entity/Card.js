import moment from 'moment'

import User from '../valueObject/User'

class Card {
  constructor(firstName, lastName, accountNumber) {
    this.accountNumber = accountNumber 
    this.issued = moment(new Date()).format('YYYY/MM/DD')
    this.userInfo = new User(firstName, lastName)
  }
}

export default Card
