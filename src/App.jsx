// aqui importamos os arquivos
import Header from "./components/Header";
import Banner from "./components/Banner"
import Lancamentos from "./components/Lancamentos";
import Produtos from "./components/Produtos";


// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Produtos />
      <Lancamentos />
    </>
  );
}
export default App