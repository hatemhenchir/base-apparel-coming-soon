import "./App.css";
import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
        <ComingSoon />
        <Input />
      </main>
    </div>
  );
}

export default App;
