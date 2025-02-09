import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';

//adding my imports
import Background from './views/background';
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import About from './views/about';
import Projects from './views/projects';
import ContactMe from './views/contact';

//import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";


//new import for react 18+ using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<Background />
		<Navbar />	
		<About />
		<Projects />
		<ContactMe/>
		<Footer />
	</React.Fragment>
);


serviceWorker.unregister();
