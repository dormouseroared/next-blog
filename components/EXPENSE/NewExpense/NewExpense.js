import React from 'react'
import ExpenseForm from './ExpenseForm'
import styles from "./NewExpense.module.css"


export default function NewExpense() {

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }

    return (
        <div className={styles["new-expense"]}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
