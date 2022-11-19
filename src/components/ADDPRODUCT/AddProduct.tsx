import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";
import CurrencyInput from 'react-currency-input-field'



export const AddProductList = ({setShowAdd}:any) => {
  const { addProduct } = useContext(ProductContext);
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const [user, setUser] = useState<any>("");
  const [type, setType] = useState<any>("");

  const handleSubmit = () => {
    
    if(product !== '' && price !== undefined && user !== '' && (type !== '' && type !== 'Product type')){
      addProduct({ product, type, price, user });
      setShowAdd(false)
    }else{
      setShowAlert(true)
    }
  };

  return (
    <div>
      
      <Form className="justify-content-center">
        <Form.Group className="mb-2 justify-content-center">
          <Form.Control
            type="text"
            placeholder="Product *"
            name="name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </Form.Group>
        <InputGroup className="mb-2">
        <CurrencyInput
        className="input-price"
        prefix='$'
        maxLength={10}
        placeholder="Please enter a price"
        defaultValue={0}
        decimalsLimit={2}
        onValueChange={(value) => setPrice(value)}
/>
      </InputGroup>
        <Form.Group className="mb-2">
          <Form.Control
            placeholder="User *"
            type="text"
            name="User"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Product type</option>
          <option value="Eletroeletrônico">Eletroeletrônico</option>
          <option value="Alimentos e bebidas">Alimentos e bebidas</option>
          <option value="Automotivo">Automotivo</option>
          <option value="Móveis">Móveis</option>
        </Form.Select>
        {showAlert && (
          <Alert
            className="mt-4"
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Por favor, preencha todos os dados de forma correta!
          </Alert>
        )}
        <div className="d-grid gap-2 mt-4">
          <Button variant="success" onClick={handleSubmit}>
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
};
