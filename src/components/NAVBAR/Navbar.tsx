import {
  Nav,
  Navbar,
  Form,
  Container,
  Button,
  NavDropdown,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { IoMdInformationCircle, IoMdHelpCircle } from "react-icons/io";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

type Props = {
  onClick:(setShow:boolean) => void;
}

export const NavbarComponent = ({ onClick }: Props) => {
  const { searchProduct } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  

  const searchValue = () => {
    searchProduct(search);
  };

  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="https://andrebottentuitm.github.io/softexMarketCrud/" className="logotipo">
            <img src={logo} width={150} alt="softexMarket" title="softexMarket" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-flex align-items-center">
                <FaShoppingCart className="position" />
                <NavDropdown
                  title="Products"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      searchProduct("Eletroeletrônico", "type");
                    }}
                    href="#Eletroeletrônico"
                  >
                    Eletroeletrônico
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      searchProduct("Alimentos e bebidas", "type");
                    }}
                    href="#Alimentos e bebidas"
                  >
                    Alimentos e bebidas
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      searchProduct("Automotivo", "type");
                    }}
                    href="#Automotivo"
                  >
                    Automotivo
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      searchProduct("Móveis", "type");
                    }}
                    href="#Móveis"
                  >
                    Móveis
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              <Nav.Link
                onClick={() => {
                  onClick(true);
                }}
                href="#Add"
              >
                <div className="d-flex align-items-center gap-1">
                  <MdAddCircle />
                  Add
                </div>
              </Nav.Link>

              <Nav.Link href="https://softexpe.org.br/" target="_blank">
                {" "}
                <div className="d-flex align-items-center gap-1">
                  <IoMdInformationCircle />
                  About
                </div>
              </Nav.Link>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Clique no link "Add" ou no botão "Create New Product" e
                    cadastre o produto no estoque.
                  </Tooltip>
                }
              >
                <Nav.Link href="#Help">
                  <div className="d-flex align-items-center gap-1">
                    <IoMdHelpCircle />
                    Help
                  </div>
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onKeyPress={(e)=> {
                  if(e.key === 'Enter'){
                    e.preventDefault()
                    searchValue()
                  }
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button onClick={searchValue} variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
