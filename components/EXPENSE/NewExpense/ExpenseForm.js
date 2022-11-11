import { useState } from "react"
import styles from "./ExpenseForm.module.css"


export default function ExpenseForm(props) {

  // initialise to string as this is what value will contain

  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value)
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value)
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value)
  }

  function submitHandler(event) {

    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log("completed", expenseData)

    props.onSaveExpenseData(expenseData)

    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }
  return (
    <form onSubmit={submitHandler} >

        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="submit">Add Expense</button>
        </div>

    </form>
  )
}
