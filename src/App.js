import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import Bag from './components/Bag';
// apparel-pages
import MaleShirts from './components/apparel-pages/MaleShirts'
import MaleShoes from './components/apparel-pages/MaleShoes';
import MaleJackets from './components/apparel-pages/MaleJackets';
import MaleHoodies from './components/apparel-pages/MaleHoodies';
import MalePants from './components/apparel-pages/MalePants';



function App() {
	return (
		<div>
			<Header />

			<Route path='/' exact component={HomePage} />
			<Route path='/product/:id' component={ProductPage} />
			<Route path='/bag/:id?' component={Bag} />

			{/* Specific apparel pages */}
			<Route path='/m-shirts' component={MaleShirts} />
			<Route path='/m-shoes' component={MaleShoes} />
			<Route path='/m-jackets' component={MaleJackets} />
			<Route path='/m-hoodies' component={MaleHoodies} />
			<Route path='/m-pants' component={MalePants} />

			<Footer />
		</div>
	);
}

export default App;
