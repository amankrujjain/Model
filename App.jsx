import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Product from './components/Product'
import ProductCard from './components/ProductCard'
import Filter from './components/Filter'
import Home from './pages/Home'

function App() {
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/support' element={<Support/>} />
    <Route path="/product" element={<Product/>}/>
    <Route path="/productcard" element={<ProductCard/>}/>
    <Route path="/filter" element={<Filter/>}/>

	</Routes>
	</Router>
);
}

export default App;
