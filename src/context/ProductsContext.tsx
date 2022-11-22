import { createContext, useEffect, useState, ReactNode } from "react";
import {List} from '../components/TYPES/types'


type AddProduct = {
  id: number;
  product: string;
  type: string;
  price: string;
  user: string;
}

type ContextProvider = {//Criando type
  children: ReactNode
};

export const ProductContext = createContext<any>([]);

const ProductContextProvider = ({children}: ContextProvider) => {
  const [productList, setList] = useState<List[]>([
    {id:1,date:'10/11/2018',product:'Carro Uno',type:'Automotivo',priceFormatDollar:'$20,000.00',user:'Andre'},
    {id:2,date:'15/01/2020',product:'Sofá Cama',type:'Móveis',priceFormatDollar:'$2,000.00',user:'João'},
    {id:3,date:'01/03/2021',product:'Carne',type:'Alimentos e bebidas',priceFormatDollar:'$23.00',user:'Julio'}
  ]);
  const [searchList, setSearch] = useState<List[]>(productList);
  const [currentPage, setPage] = useState<number>(1);


  useEffect(() => {
    setSearch(productList);
  }, [productList]);
 

  const addProduct = ({ id ,product, type, price, user }: AddProduct) => {
    let date: any = new Date();
    date = date.toLocaleDateString();
    let priceFormatNumber = parseFloat(price.replace(/,/g, '.'))
    
    let priceFormatDollar = priceFormatNumber.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
     
    setList([
      ...productList,
      { id, date, product, type, priceFormatDollar, user },
    ]);
  };

  const searchProduct = (searchValue: string, type: string) => {
    let cloneList = productList
    if (!type) {
      setSearch(
        cloneList.filter(
          (item) =>
            item.product.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.user.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Eletroeletrônico") {
      setSearch(
        cloneList.filter((item) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Alimentos e bebidas") {
      setSearch(
        cloneList.filter((item) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Automotivo") {
      setSearch(
        cloneList.filter((item) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (searchValue === "Móveis") {
      setSearch(
        cloneList.filter((item) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
    setPage(1)
  };

  const deleteProduct = (id:number) => {
    setList(productList.filter((product) => product.id !== id));
  };

  const updateProduct = (id: number, updateProduct: List) => {
    let priceFormatNumber = parseFloat(updateProduct.priceFormatDollar.replace(/,/g, '.'))
    let formatDollar = priceFormatNumber.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
   
    updateProduct.priceFormatDollar = formatDollar
  
    setList(
      productList.map((product) =>
      product.id === id ? updateProduct : product
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
        currentPage,
        setPage
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
