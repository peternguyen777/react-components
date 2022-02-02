import "./OpenExpenseForm.css";

const OpenExpenseForm = (props) => {
	const toggleFormHandler = (event) => {
		event.preventDefault();
		props.onAddNewExpense(true);
	};

	return (
		<div className="add-new-expense__actions">
			<button type="submit" onClick={toggleFormHandler}>
				Add New Expense
			</button>
		</div>
	);
};

export default OpenExpenseForm;
