import React from "react"; //not necessary to import but good practice
import Card from "../UI/Card"; //import from back one folder, then dive into UI folder to find Card.js
import ExpenseItem from "./ExpenseItem"; //import from same folder (components/Expenses/)
import "./Expenses.css"; //import from same folder (components/Expenses/)

function Expenses(props) {
	return (
		<Card className="expenses">
			{/* class 'expenses' is applied/added to the Card component */}
			<ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/>
		</Card>
	);
}

export default Expenses;
