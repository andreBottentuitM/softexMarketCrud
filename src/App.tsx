import ProductList from './components/PRODUCTSLIST/productList' 
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductContextProvider from './context/ProductsContext'



function App() {

  return (
    <div>
      <ProductContextProvider>
            <ProductList />
          </ProductContextProvider>
    </div>
  );
}

export default App;
