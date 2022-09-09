import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Particle from './components/particles/Particle';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Particle />
		</div>
	);
}

export default App;
