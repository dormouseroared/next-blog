import { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import styles from "./ExpenseItem.module.css"

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)


    function clickHandler() {
        const ran = Math.random()
        setTitle(ran)
        console.log(ran)
    }

    return (
        <div className={styles["expense-item"]}>
            <ExpenseDate date={props.date}/>
            <div className={styles["expense-item__description"]}>
                <h2>{title}</h2>
                <div className={styles["expense-item__price"]}>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}


//  <div>{props.date.toISOString()}</div>

//  ---multiple classes with css modules---

// https://stackoverflow.com/questions/33949469/using-css-modules-how-do-i-define-more-than-one-style-name

// You can use an array that will be joined with a space.

// <div className={[styles.App, styles.bold, styles['d-flex-c']].join(' ')}>

// I prefer this to using template literals like someone suggested because it is easier to add and remove classes without having to wrap them in ${} every single time.

// this example shows two classes being applied to the div using two approaches, the second one being useful where there are characters like spaces in the name

// <div className={[styles.redText, styles["backWhite"]].join(" ")}>cat sat on the mat</div>