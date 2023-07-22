// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

class MoneyManager extends Component {
  state = {}

  render() {
    return (
      <div className="main-container">
        <div className="first-container">
          <h1 className="fc-heading">Hi, Richard</h1>
          <p className="fc-para">
            Welcome back to your <span className="fc-span">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails />
        </div>
      </div>
    )
  }
}

export default MoneyManager
