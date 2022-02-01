import React, { useState } from "react"; //not necessary to import but good practice
import Card from "../UI/Card"; //import from back one folder, then dive into UI folder to find Card.js
import ExpenseItem from "./ExpenseItem"; //import from same folder (components/Expenses/)
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"; //import from same folder (components/Expenses/)

function Expenses(props) {
	const [filterYear, setFilterYear] = useState("2020");

	const saveYearHandler = (selectedYear) => {
		console.log("ExpensesJS");
		console.log(selectedYear);
		setFilterYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filterYear} onSaveYear={saveYearHandler} />
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
		</div>
	);
}

export default Expenses;
