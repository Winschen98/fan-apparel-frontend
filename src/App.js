import './CSS/App.css'
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import Bag from './components/Bag';
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage';

// apparel-pages
import MaleShirts from './components/apparel-pages/MaleShirts'
import MaleShoes from './components/apparel-pages/MaleShoes';
import MaleJackets from './components/apparel-pages/MaleJackets';
import MaleHoodies from './components/apparel-pages/MaleHoodies';
import MalePants from './components/apparel-pages/MalePants';
import FemaleBag from './components/apparel-pages/FemaleBag';
import FemaleJackets from './components/apparel-pages/FemaleJackets';
import FemaleShoes from './components/apparel-pages/FemaleShoes'; 



function App() {
	return (
		<div className='display'>
			<Header />

			<Route path='/' exact component={HomePage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegistrationPage} />
			<Route path='/product/:id' component={ProductPage} />
			<Route path='/bag/:id?' component={Bag} />

			{/* Specific apparel pages */}
			<Route path='/m-shirts' component={MaleShirts} />
			<Route path='/m-shoes' component={MaleShoes} />
			<Route path='/m-jackets' component={MaleJackets} />
			<Route path='/m-hoodies' component={MaleHoodies} />
			<Route path='/m-pants' component={MalePants} />

			<Route path='/f-bags' component={FemaleBag} />
			<Route path='/f-jackets' component={FemaleJackets} />
			<Route path='/f-shoes' component={FemaleShoes} />

			<span className='footer'>
				<Footer />
			</span>
		</div>
	);
}

export default App;
