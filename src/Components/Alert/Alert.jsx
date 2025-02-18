import React from "react";
import "./alert.css";
import classNames from "classnames";
import { useState } from "react";

const Alert = ({ children, type, message }) => {
	const [isShow, setIsShow] = useState(true);

	const handleClose = (e) => {
		e.preventDefault();
		setIsShow(false);
	};

	const renderElAlert = () => {
		return React.cloneElement(children);
	};

	return (
		<div className={classNames(style.alert, style[type])}>
			<span className=".closebtn" onClick={handleClose}>
				&times;
			</span>
			{children ? renderElAlert() : message}
		</div>
	);
};

export default Alert;
