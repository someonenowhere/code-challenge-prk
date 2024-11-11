import { Provider } from 'react-redux';
import { store } from './store/store';
import PokemonList from './PokemonList'

// const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  return (
    <Provider store={store}>
      <h1>Pokemon list:</h1>
      <PokemonList />
    </Provider>
  )
}

export default App
