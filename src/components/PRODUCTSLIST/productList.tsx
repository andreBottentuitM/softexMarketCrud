import { useState, useContext } from "react";
import { Table, Button, Container, Modal } from "react-bootstrap";
import { AddProduct } from "../INFORMATIONS/information";
import { Paginations } from "../PAGINATION/Pagination";
import { MdAddCircle } from "react-icons/md";
import { AddProductList } from "../ADDPRODUCT/AddProduct";
import { ProductContext } from "../../context/ProductsContext";
import { NavbarComponent } from "../NAVBAR/Navbar";
import {BsArrowDownUp} from 'react-icons/bs'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const ProductList = () => {

 
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const [currentPage, setPage] = useState(1);
  const { productList, searchList, setSearch } = useContext(ProductContext);

  const productPerPage = 5;

  const lastProduct = currentPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;
  const pageDisplay = searchList.slice(firstProduct, lastProduct);
  const totalPages = Math.ceil(searchList.length / productPerPage);

  return (
    <div>
      <Container 
        className={`w-auto p-3 container-input container shadow p-3 mb-5 rounded`}
        fluid="md"
      >
        <NavbarComponent onClick={setShowAdd}/>

        <div className="container-add">
          <Button
            onClick={() => {
              setShowAdd(true);
            }}
            className="buttonAdd"
            variant='primary'
          >
            <MdAddCircle  /> <span> Create New Product </span>
          </Button>
          <div className='totalProducts primary'>
            All Products: <span>{productList.length}</span>
          </div>
        </div>
        <h4 onClick={() => setSearch(productList)} className="heading">
          All Products
        </h4>
        <Modal
          show={showAdd}
          onHide={() => {
            setShowAdd(false);
          }}
        >
          {/*Criação do modal de edit. Função para fechar o modal */}
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <AddProductList  setShowAdd={setShowAdd}/>

          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setShowAdd(false);
              }}
              variant="secondary"
            >
              {/*Criação de botão para fechar */}
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
        <Container className="w-auto table-responsive" fluid="md">
          <Table className="table text-center" striped bordered hover variant='light'>
            <thead>
              <tr className="thead col align-items-center">
                <th>SI <BsArrowDownUp/> </th>
                <th>Product Date <BsArrowDownUp/></th>
                <th>Product Name <BsArrowDownUp/></th>
                <th>Product Type <BsArrowDownUp/></th>
                <th>Product Price <BsArrowDownUp/></th>
                <th>Uploaded By <BsArrowDownUp/></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pageDisplay.map((item: any, i: any) => {
                return (
                  <tr key={productList.id}>
                    <AddProduct index={i} product={item} />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        <Paginations pages={totalPages} setCurrentPage={setPage} />
        </Container>
      </Container>
    </div>
  );
};

export default ProductList;
