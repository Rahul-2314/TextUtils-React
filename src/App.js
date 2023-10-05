import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [textColor, setTextColor] = useState("#000000");
	const [backgroundColor, setBackgroundColor] = useState("#333333");

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<>
		<Router>
			<Navbar
				title="TextUtils"
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				textColor={textColor}
				backgroundColor={backgroundColor}
				setBackgroundColor={setBackgroundColor}
				setTextColor={setTextColor}
				/>
		<div className="container my-3">
		<Routes>
			<Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForms
                  heading="Enter Your Text :"
                  darkMode={darkMode}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  setBackgroundColor={setBackgroundColor}
                  setTextColor={setTextColor}
                />}/>
        </Routes>
		</div>
		</Router>
		</>
		// ai text generator features
	);
}

export default App;
