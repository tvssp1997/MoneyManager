import './index.css'

const MoneyDetails = props => {
  const {yourBalance} = props

  return (
    <div className="bg-container">
      <div className="balance-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
            className="image-element"
          />
        </div>
        <div className="content-container">
          <h1 className="content-heading">Your Balance</h1>
          <p className="content-heading">Rs 0</p>
        </div>
      </div>
      <div className="income-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image-element"
          />
        </div>
        <div className="content-container">
          <h1 className="content-heading">Your Balance</h1>
          <p className="content-heading">Rs 0</p>
        </div>
      </div>
      <div className="expense-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="image-element"
          />
        </div>
        <div className="content-container">
          <h1 className="content-heading">Your Balance</h1>
          <p className="content-heading">Rs 0</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
