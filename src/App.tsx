import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header></Header>
      <About></About>
		</div>
	);
}

export default App;
