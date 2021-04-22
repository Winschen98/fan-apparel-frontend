import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'

function App() {
	return (
		<div>
			<Header />

			<Route path='/' exact component={HomePage} />
			<Route path='/product/:id' component={ProductPage} />

			<Footer />
		</div>
	);
}

export default App;
