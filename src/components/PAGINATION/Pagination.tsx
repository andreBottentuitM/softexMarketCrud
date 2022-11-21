import Pagination from "react-bootstrap/Pagination";
import {useContext} from 'react'
import {ProductContext} from '../../context/ProductsContext'

type Props = {
  pages:number;
}

export const Paginations = ({ pages }: Props) => {

  const { setPage, currentPage } = useContext(ProductContext);

  let numbersArray: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numbersArray.push(i);
  }

  let isPageNumberOutOfRange:any;

  const paginationList = numbersArray.map((item, key) => {
    const pageNumber = item
    const isPageNumberFirst = pageNumber === 1
    const isPageNumberLast = pageNumber === pages
    const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) <= 1;
    if(isPageNumberFirst || isPageNumberLast || isCurrentPageWithinTwoPageNumbers){
      isPageNumberOutOfRange = false;

      return (
        <Pagination.Item
          key={pageNumber}
          active={currentPage === item ? true : false}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }
    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber}/>;
    }
    return null;
  })
  
  return (
    <div>
      <Pagination className='paginations' >
        <Pagination.First onClick={() => setPage(numbersArray[0])} />
        <Pagination.Prev
          onClick={() =>
            currentPage !== numbersArray[0]
              ? setPage(currentPage - 1)
              : null
          }
        />
        {paginationList}
        <Pagination.Next
          onClick={() =>
            currentPage !== numbersArray[numbersArray.length - 1]
              ? setPage(currentPage + 1)
              : null
          }
        />
        <Pagination.Last
          onClick={() => setPage(numbersArray[numbersArray.length - 1])}
        />
      </Pagination>
    </div>
  );
};
