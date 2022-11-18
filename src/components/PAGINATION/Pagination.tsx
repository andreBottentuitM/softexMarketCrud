import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginations = ({ pages, setCurrentPage }: any) => {
  const [currentButton, setButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [pages, currentButton]);

  let numbersArray: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numbersArray.push(i);
  }

  return (
    <div>
      <Pagination className="justify-content-center">
        <Pagination.First onClick={() => setButton(numbersArray[0])} />
        <Pagination.Prev
          onClick={() =>
            currentButton !== numbersArray[0]
              ? setButton(currentButton - 1)
              : null
          }
        />
        <Pagination.Ellipsis />
        {numbersArray.map((item, key) => {
          return (
            <Pagination.Item
              key={key}
              active={currentButton === item ? true : false}
              onClick={() => setButton(item)}
            >
              {item}
            </Pagination.Item>
          );
        })}
        <Pagination.Next
          onClick={() =>
            currentButton !== numbersArray[numbersArray.length - 1]
              ? setButton(currentButton + 1)
              : null
          }
        />
        <Pagination.Last
          onClick={() => setButton(numbersArray[numbersArray.length - 1])}
        />
      </Pagination>
    </div>
  );
};
