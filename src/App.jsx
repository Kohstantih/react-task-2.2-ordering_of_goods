import { products } from './components/products/products';
import { Store } from './components/Store'
import './App.css'

const icons = ['view_list', 'view_module'];

function App() {
  return (
    <>
      <Store icons={icons} products={products}/>
    </>
  )
}

export default App
