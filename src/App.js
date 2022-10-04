
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';




function App() {

  return (
    <header className="App">
      <NavBar>
        <ItemListContainer/>
      </NavBar>
    </header>
  );
}

export default App;
