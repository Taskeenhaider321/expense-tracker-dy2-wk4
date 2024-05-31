import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
	useEffect(() => {
		AOS.init({
		  duration: 1500, 
		  easing: 'ease-in-out', 
		});
	  }, []);
	
	const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		}

		setTotalIncome(temp);
	}, [income]);
	

	return (
		<div className="App">
			<div data-aos="flip-left"><Header totalIncome={totalIncome} /></div>
			<div data-aos="zoom-in"><IncomeForm income={income} setIncome={setIncome} /></div>
			<div data-aos="zoom-out-up"><IncomeList income={income} setIncome={setIncome} /></div>
			
		</div>
	);
}

export default App;