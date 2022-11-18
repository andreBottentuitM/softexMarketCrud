import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext<any>([]);

const ProductContextProvider = (props: any) => {
  const [productList, setList] = useState<any>([]);
  const [searchList, setSearch] = useState<any>(productList);

  useEffect(() => {
    setSearch(productList);
  }, [productList]);

  const addProduct = ({ product, type, price, user }: any) => {
    let date: any = new Date();
    date = date.toLocaleDateString();

    setList([
      ...productList,
      { id: uuidv4(), date, product, type, price, user },
    ]);
  };

  const searchProduct = (searchValue: string, type: string) => {
    if (!type) {
      let cloneList = productList;
      setSearch(
        cloneList.filter(
          (item: any) =>
            item.product.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.user.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Eletroeletrônico") {
      let cloneList = productList;
      setSearch(
        cloneList.filter((item: any) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Alimentos e bebidas") {
      let cloneList = productList;
      setSearch(
        cloneList.filter((item: any) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Automotivo") {
      let cloneList = productList;
      setSearch(
        cloneList.filter((item: any) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Móveis") {
      let cloneList = productList;
      setSearch(
        cloneList.filter((item: any) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const deleteProduct = (id: any) => {
    setList(productList.filter((collaborator: any) => collaborator.id !== id));
  };

  const updateProduct = (id: any, updatedEmployee: any) => {
    console.log(updatedEmployee);
    setList(
      productList.map((employee: any) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        deleteProduct,
        productList,
        updateProduct,
        searchProduct,
        searchList,
        setSearch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
