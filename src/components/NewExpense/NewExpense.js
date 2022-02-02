import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import OpenExpenseForm from "./OpenExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
	const [formToggle, setFormToggle] = useState(false);

	const changeToggleHandler = (toggle) => {
		setFormToggle(toggle);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);

		setFormToggle(false);
	};

	return (
		<div className="new-expense">
			{formToggle && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={changeToggleHandler}
				/>
			)}
			{!formToggle && <OpenExpenseForm onAddNewExpense={changeToggleHandler} />}
		</div>
	);
}

export default NewExpense;
