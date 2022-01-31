import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
	//can also use arrow function instead of regular function definition!
	const month = props.date.toLocaleString("en-uS", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};

export default ExpenseDate;
