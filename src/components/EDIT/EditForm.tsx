import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";

export const EditForm = ({ productEdit }: any) => {
  const { updateProduct } = useContext(ProductContext);

  const id = productEdit.id;

  const [product, setName] = useState<any>(productEdit.product);
  const [price, setEmail] = useState<any>(productEdit.price);
  const [user, setUser] = useState<any>(productEdit.user);
  const [type, setType] = useState<any>(productEdit.type);

  let date = productEdit.date;

  const updatedProductList = { id, date, product, price, user, type };

  const handleSubmit = () => {
    updateProduct(id, updatedProductList);
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
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Price *"
            name="email"
            value={price}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </Form.Group>
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
        <div className="d-grid gap-2 mt-4">
          <Button variant="success" className="" onClick={handleSubmit}>
       
            Edit Product
          </Button>
        </div>
      </Form>
    </div>
  );
};
