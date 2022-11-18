import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../INFORMATIONS/style.css";
import { EditForm } from "../EDIT/EditForm";

export const AddProduct = ({ product, index }: any) => {
  const { deleteProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <td>{index + 1}</td>
      <td>{product.date}</td>
      <td>{product.product}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      <td>
        <span className="user">{product.user}</span>
      </td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={() => {
              setShow(true);
            }}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deleteProduct(product.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        {/*Criação do modal de edit. Função para fechar o modal */}
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm productEdit={product} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            {/*Criação de botão para fechar */}
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
