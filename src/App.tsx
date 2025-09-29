import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header></Header>
      <About></About>
      <Projects></Projects>
			<Experiences></Experiences>
			<Contact></Contact>
		</div>
	);
}

export default App;
