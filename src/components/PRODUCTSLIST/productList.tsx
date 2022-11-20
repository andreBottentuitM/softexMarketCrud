import { useState, useContext, useEffect } from "react";
import { Table, Button, Container, Modal } from "react-bootstrap";
import { AddProduct } from "../INFORMATIONS/information";
import { Paginations } from "../PAGINATION/Pagination";
import { MdAddCircle } from "react-icons/md";
import { AddProductList } from "../ADDPRODUCT/AddProduct";
import { ProductContext } from "../../context/ProductsContext";
import { NavbarComponent } from "../NAVBAR/Navbar";
import { BsArrowDownUp } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const ProductList = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [order, setOrder] = useState({
    date: "down",
    name: "down",
    type: "down",
    price: "down",
    user: "down",
  });
  const [currentPage, setPage] = useState(1);
  const { productList, searchList, setSearch } = useContext(ProductContext);

  const productPerPage = 10;

  const lastProduct = currentPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;
  const pageDisplay = searchList.slice(firstProduct, lastProduct);
  const totalPages = Math.ceil(searchList.length / productPerPage);

  const orderedProduct = (type: any) => {
    let cloneList = [...searchList];
    let cloneOrder = order;

    if (type === "name") {
      cloneList.sort((a: any, b: any) => {
        return order.name === "down"
          ? a.product.localeCompare(b.product)
          : b.product.localeCompare(a.product);
      });
      cloneOrder.name === "down"
        ? (cloneOrder.name = "up")
        : (cloneOrder.name = "down");
      setOrder(cloneOrder);
    } else if (type === "type") {
      cloneList.sort((a: any, b: any) => {
        return order.type === "down"
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      });
      cloneOrder.type === "down"
        ? (cloneOrder.type = "up")
        : (cloneOrder.type = "down");
      setOrder(cloneOrder);
    } else if (type === "user") {
      cloneList.sort((a: any, b: any) => {
        return order.user === "down"
          ? a.user.localeCompare(b.user)
          : b.user.localeCompare(a.user);
      });
      cloneOrder.user === "down"
        ? (cloneOrder.user = "up")
        : (cloneOrder.user = "down");
      setOrder(cloneOrder);
    } else if (type === "price") {
      cloneList.sort((a: any, b: any) => {
        let num1 = parseFloat(
          a.priceFormatDollar.substring(1).replace(/,/, "")
        );
        let num2 = parseFloat(
          b.priceFormatDollar.substring(1).replace(/,/, "")
        );
        if (num1 < num2) {
          return cloneOrder.price === "down" ? -1 : 1;
        }
        if (num1 > num2) {
          return cloneOrder.price === "down" ? 1 : -1;
        }
        return 0;
      });
      cloneOrder.price === "down"
        ? (cloneOrder.price = "up")
        : (cloneOrder.price = "down");
      setOrder(cloneOrder);
    } else if (type === "user") {
      cloneList.sort((a: any, b: any) => {
        return a.user.localeCompare(b.user);
      });
    }
    setSearch(cloneList);
  };

  return (
    <div>
      <Container
        className={`w-auto p-3 container-input container shadow p-3 mb-5 rounded`}
        fluid="md"
      >
        <NavbarComponent onClick={setShowAdd} />

        <div className="container-add">
          <Button
            onClick={() => {
              setShowAdd(true);
            }}
            className="buttonAdd"
            variant="primary"
          >
            <MdAddCircle /> <span> Create New Product </span>
          </Button>
          <div className="totalProducts primary">
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
            <AddProductList setShowAdd={setShowAdd} />
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
          <Table
            className="table text-center"
            striped
            bordered
            hover
            variant="light"
          >
            <thead>
              <tr className="thead col align-items-center heading-table">
                <th>
                  SI <BsArrowDownUp />{" "}
                </th>
                <th onClick={() => {}}>
                  Product Date <BsArrowDownUp />
                </th>
                <th
                  onClick={() => {
                    orderedProduct("name");
                  }}
                >
                  Product Name <BsArrowDownUp />
                </th>
                <th
                  onClick={() => {
                    orderedProduct("type");
                  }}
                >
                  Product Type <BsArrowDownUp />
                </th>
                <th
                  onClick={() => {
                    orderedProduct("price");
                  }}
                >
                  Product Price <BsArrowDownUp />
                </th>
                <th
                  onClick={() => {
                    orderedProduct("user");
                  }}
                >
                  Uploaded By <BsArrowDownUp />
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pageDisplay.map((item: any, i: any) => {
                return (
                  <tr key={i}>
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
