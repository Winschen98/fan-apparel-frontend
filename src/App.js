import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout';

function App() {
	return (
		<div>
			<Header />

			<Route path='/' exact component={HomePage} />
			<Route path='/product/:id' component={ProductPage} />
			<Route path='/checkout/:id?' component={Checkout} />

			<Footer />
		</div>
	);
}

export default App;
