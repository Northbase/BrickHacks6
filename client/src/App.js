import React from 'react';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import QuotesContainer from './components/QuotesContainer';
import AddButton from './components/AddButton';

function App() {
	return (
		<div className='App'>
			<Hello />
			<QuotesContainer />
			<AddButton />
			<Navbar />
		</div>
	);
}

export default App;
