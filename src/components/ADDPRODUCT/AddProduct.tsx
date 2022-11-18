import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";

export const AddProductList = () => {
  const { addProduct } = useContext(ProductContext);

  const [product, setProduct] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const [user, setUser] = useState<any>("");
  const [type, setType] = useState<any>("");

  const handleSubmit = () => {
    addProduct({ product, type, price, user });
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
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Price *"
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }} //Vai mudar o valor do email
            required
          />
        </Form.Group>
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
        <div className="d-grid gap-2 mt-4">
          <Button variant="success" onClick={handleSubmit}>
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
};
