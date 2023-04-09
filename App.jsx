import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import Events from "./pages/Events";
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
		<Route path='/about-us/aim' element={<OurAim/>} />
		<Route path='/about-us/vision' element={<OurVision/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/support' element={<Support/>} />
    <Route path="/product" element={<Product/>}/>
    <Route path="/productcard" element={<ProductCard/>}/>
    <Route path="/filter" element={<Filter/>}/>

	</Routes>
	</Router>
);
}

export default App;
