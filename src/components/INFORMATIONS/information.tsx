import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../INFORMATIONS/style.css";
import { EditForm } from "../EDIT/EditForm";
import {List} from "../TYPES/types"

type Props = {
  product: List
}


export const AddProduct = ({product}:Props) => {
  const { deleteProduct } = useContext(ProductContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleClose = () => {
    setShowEdit(false);
  };
  return (
    <>
      <td>{product.id}</td>
      <td>{product.date}</td>
      <td>{product.product}</td>
      <td>{product.type}</td>
      <td>{product.priceFormatDollar}</td>
      <td>
        <span className="user">{product.user}</span>
      </td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={() => {
              setShowEdit(true);
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

      <Modal show={showEdit} onHide={handleClose}>
        {/*Criação do modal de edit. Função para fechar o modal */}
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm productEdit={product} setShowEdit={setShowEdit} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowEdit(false);
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
