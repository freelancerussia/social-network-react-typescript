import React, { useState } from "react";
import styles from "./paginations.module.css"
import PaginationPage from "./PaginationPage/PaginationPage";

type PaginatiosPropsType = {
   currentPage: number
   setCurrentPage: (page: number) => void
   totalCount: number
   elementsCount: number
}

const Paginations = (props: PaginatiosPropsType) => {
   let pages = []
   let pagesCount = Math.ceil(props.totalCount / props.elementsCount);
   for (let i = 1; i <= pagesCount; i++) {

      pages.push(i);
   }

   //for paginator page постраничный вывод
   let [pagePointer, setPagePointer] = useState<number>(Math.ceil(props.currentPage / 10));
   let pagePointerCount = Math.ceil(pagesCount / 10);


   let leftPointer = (pagePointer - 1) * 10 + 1;
   let rightPointer = pagePointer * 10;

   const prevPage = () => {
      setPagePointer(pagePointer - 1)
   }
   const nextPage = () => {
      setPagePointer(pagePointer + 1)
   }

   return (
      <>
         <div className={styles.paginations}>
            {pagePointer > 1 && <button onClick={prevPage}>prev</button>}
            {
               pages.filter(p => p >= leftPointer && p <= rightPointer)
                  .map(p => {
                     const setCurrentPage = () => {
                        props.setCurrentPage(p);
                     }
                     return (
                        <PaginationPage key={p} page={p} currentPage={props.currentPage} setCurrentPage={setCurrentPage} />
                     )
                  })
            }
            {pagePointer < pagePointerCount && <button onClick={nextPage}>next</button>}
         </div >
      </>
   )
}
export default Paginations;