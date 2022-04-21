
// importacion de componentes 
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

// importacion de estilos 
// import "../assets/sass/app.scss";

function App() {
  return (
    <div className="principal-container">
      <NavBar />
      <ItemListContainer producto="Coca-Cola" >
        <p>500Ml</p>
      </ItemListContainer>
    </div>
  );
}

export default App;
