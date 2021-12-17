import Articles from "./components/Articles";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Layout>
        <Hero />
        <Features />
        <Articles />
      </Layout>
    </div>
  );
}

export default App;
