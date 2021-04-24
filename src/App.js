import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import Bag from './components/Bag';

function App() {
	return (
		<div>
			<Header />

			<Route path='/' exact component={HomePage} />
			<Route path='/product/:id' component={ProductPage} />
			<Route path='/bag/:id?' component={Bag} />

			<Footer />
		</div>
	);
}

export default App;
