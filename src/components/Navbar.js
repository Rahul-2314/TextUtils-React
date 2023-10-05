import React, { useEffect } from "react";
import "./Navbarbg.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	return (
		<div>
			<nav
				className={`navbar navbar-expand-lg ${
					props.darkMode ? "navbar-dark bg-dark" : "navbar-light bg-grey"
				}`}
			>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand" style={{ color: "white" }}>
						<span>{props.title}</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<Link
										to="/"
										className="nav-link active"
										aria-current="page"
										style={{ color: "white" }}
									>
										<span>Home</span>
									</Link>
									<Link
										to="/about"
										className="nav-link active"
										aria-current="page"
										style={{ color: "white" }}
									>
										<span>About</span>
									</Link>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-success mx-1" type="submit">
								Search
							</button>
						</form>
						<button
							type="Button"
							className="btn btn-secondary mx-2"
							onClick={props.toggleDarkMode}
						>
							{props.darkMode ? <b>Light Mode</b> : <b>Dark Mode</b>}
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
