import React, { useState, useEffect } from "react";
import "./TextForms.css";

export default function TextForms(props) {
	const [text, setText] = useState("Enter text :");
	// const [darkMode, setDarkMode] = useState(true)
	// const [textColor, setTextColor] = useState("#000000"); // Default text color);
	// const [backgroundColor, setBackgroundColor] = useState("#333333"); // Default background color
	const [showAlert, setShowAlert] = useState(false);
	const [alertText, setAlertText] = useState("");
	const [alertType, setAlertType] = useState("alert alert-info");

	// const toggleDarkMode = () => {
	// 	setDarkMode(!darkMode);
	// };

	useEffect(() => {
		if (props.darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [props.darkMode]);

	useEffect(() => {
		if (props.darkMode) {
			props.setTextColor("#ffffff"); // Set text color to white for dark mode
			props.setBackgroundColor("#333333"); // Set background color to black for dark mode
		} else {
			props.setTextColor("#000000"); // Set text color to black for light mode
			props.setBackgroundColor("#ffffff"); // Set background color to white for light mode
		}
	}, [props.darkMode]);

	const handleUpClick = () => {
		if (text !== "") {
			console.log("handleUpClick was clicked-" + text);
			let newText = text.toUpperCase();
			setText(newText);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-primary");
			setAlertText("Enter Something To See");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	};

	const handleDnClick = () => {
		if (text !== "") {
			console.log("handleUpClick was clicked-" + text);
			let newText = text.toLowerCase();
			setText(newText);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-primary");
			setAlertText("Enter Something To See");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	};

	const handleClearText = () => {
		if (text !== "") {
			console.log("handleClearText was clicked-" + text);
			let newText = "";
			setText(newText);
			setShowAlert(true);
			setAlertType("alert alert-secondary");
			setAlertText("Text Cleared");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-primary");
			setAlertText("Already Cleared");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	};

	const handleOnChange = (event) => {
		console.log("on chnage");
		setText(event.target.value);
	};

	const handleBeautify = () => {
		if (text !== "") {
			console.log("handleCapitalWord was clicked-" + text);
			let words = text;
			let arr_words = words.split(" ");
			let arr = [];
			for (let i = 0; i < arr_words.length; i++) {
				let word = arr_words[i];
				let first = word[0].toUpperCase();
				let remain = word.slice(1).toLowerCase();
				let text = first + remain;
				arr.push(text);
			}
			let new_text = arr.join(" ");
			setText(new_text);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-primary");
			setAlertText("Enter Something To See");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	};

	const handleSpaces = () => {
		if (text !== "") {
			let newPara = text.trim().replace(/\s+/g, " ");
			setText(newPara);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-primary");
			setAlertText("Enter Something To See");
			setTimeout(() => {
				setShowAlert(false);
			}, 1500);
		}
	};

	const handleCopy = () => {
		if (text !== "") {
			const textArea = document.createElement("textarea");
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);
			console.log("Text Copied -" + text);
			// alert("Text copied to clipboard!");
			setShowAlert(true); // Show the alert when text is copied
			setAlertType("alert alert-success");
			setAlertText("Text Copied To Clipboard");
			// Hide the alert after 2 seconds
			setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		} else {
			setShowAlert(true);
			setAlertType("alert alert-warning");
			setAlertText("Enter Something To Copy");
			setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		}
	};

	const start = () => {
		if (text === "Enter text :") {
			setText("");
		}
	};

	const handleListen=()=>{
			let utterance = new SpeechSynthesisUtterance(text);
			// console.log(window.speechSynthesis.speak);
			console.log("listening");
			window.speechSynthesis.speak(utterance);
	}

	return (
		<>
			{showAlert && (
				<div
					className={alertType}
					style={{
						textAlign: "center",
						position: "fixed",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginLeft: "35%",
						marginTop: "1px",
						borderRadius: "50px",
					}}
					role="alert"
				>
					<div>
						<b>{alertText}</b>
					</div>
				</div>
			)}

			<div className={`container my-3 ${props.darkMode ? "dark-mode" : ""}`}>
				<form>
					<h1 style={{ color: "violet" }}>{props.heading}</h1>
					<div className="mb-3 my-3">
						<textarea
							className="form-control"
							value={text}
							onChange={handleOnChange}
							onClick={start}
							id="myBox"
							rows="8"
							style={{
								color: props.textColor,
								borderColor: "lightgreen",
								borderWidth: "2px",
								borderLeftColor: "lightskyblue",
								borderRightColor: "lightskyblue",
								backgroundColor: props.backgroundColor,
							}}
						></textarea>
					</div>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-success mx-3 my-3"
						onClick={handleDnClick}
					>
						<b>Convert To Lowercase</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-primary mx-3 my-3"
						onClick={handleUpClick}
					>
						<b>Convert To Uppercase</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-warning mx-3 my-3"
						onClick={handleSpaces}
					>
						<b>Remove Extra Spaces</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-info mx-4 my-3"
						onClick={handleBeautify}
					>
						<b>Beautify</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-danger mx-4 my-3"
						onClick={handleClearText}
					>
						<b>ClearText</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-outline-info mx-4 my-3"
						onClick={handleCopy}
					>
						<b>Copy Text</b>
					</button>
					<button
						type="Button"
						style={{
							borderRadius: "50px",
							textAlign: "center",
							display: "inline-table",
						}}
						className="btn btn-outline-danger mx-4 my-3"
						onClick={handleListen}
					>
						<b>Listen Now</b>
					</button>
				</form>
			</div>
			<div className={`container my-5 ${props.darkMode ? "dark-mode" : ""}`}>
				<h2 style={{ color: "violet" }}>Summary :</h2>
				<p>
					{text.split(" ").filter(Element=>Element!=="").length} words and {text.length} characters
				</p>
				<p>
					<b>Reading time : </b>
					{0.008 * text.split(" ").length} minutes
				</p>
				<h3 style={{ color: "violet" }}>Preview :</h3>
				<p>{text}</p>
			</div>
		</>
	);
}
