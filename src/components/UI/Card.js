import React from "react";
import "./Card.css";

function Card(props) {
	const classes = "card " + props.className;
	//allows you to apply the card css class + className passed through from the prop.

	return <div className={classes}>{props.children}</div>;
	//use {props.children}
	//children is a native props method that includes the content between the div
}

export default Card;
