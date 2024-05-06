import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Layout>
      <ItemListContainer saludo={"Bienvenido a TK Shop"} />
    </Layout>
  );
}

export default App;