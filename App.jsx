import React from 'react'
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from './components/ProductCard';
import Filter from './components/Filter'
import Home from './pages/Home'
const LazyAbout = React.lazy(()=> import('./pages/AboutUs'))
const LazyContact = React.lazy(()=> import('./pages/ContactUs'))
const LazyProduct = React.lazy(()=> import('./components/Product'))

function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<React.Suspense fallback='about'><LazyAbout /></React.Suspense>} />
				<Route path='/contact' element={<React.Suspense fallback='contact'><LazyContact /></React.Suspense>} />
				<Route path="/product" element={<React.Suspense fallback="product"><LazyProduct /></React.Suspense>} />
				<Route path="/productcard" element={<ProductCard />} />
				<Route path="/filter" element={<Filter />} />

			</Routes>
		</Router>
	);
}

export default App;
