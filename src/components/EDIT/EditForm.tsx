import { Form, Button, Alert } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";
import CurrencyInput from 'react-currency-input-field'

export const EditForm = ({ productEdit, setShowEdit}: any) => {
  const { updateProduct } = useContext(ProductContext);

  const id = productEdit.id;
  const [showAlert, setShowAlert] = useState(false);
  const [product, setName] = useState<any>(productEdit.product);
  const [price, setPrice] = useState<any>(productEdit.price);
  const [user, setUser] = useState<any>(productEdit.user);
  const [type, setType] = useState<any>(productEdit.type);
 
  let date = productEdit.date;

  const updatedProductList = { id, date, product, price, user, type };

  const handleSubmit = () => {
    if(product !== '' && price !== undefined && user !== '' && (type !== '' && type !== 'Product type')){
      setShowEdit(false)
    updateProduct(id, updatedProductList);}
    else{
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
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </Form.Group>
        <CurrencyInput
        className="input-price mb-2"
        prefix='$'
        value={price}
        maxLength={10}
        placeholder="Please enter a price*"
        decimalsLimit={2}
        onValueChange={(value) => setPrice(value)}
/>
        <Form.Group className="mb-2">
          <Form.Control
            placeholder="User *"
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)} 
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
          <Button variant="success" className="" onClick={handleSubmit}>
       
            Edit Product
          </Button>
        </div>
      </Form>
    </div>
  );
};