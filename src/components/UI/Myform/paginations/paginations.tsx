import React from "react";
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


   return (
      <div className={styles.paginations}>
         {
            pages.map(p => {
               const setCurrentPage = () => {
                  props.setCurrentPage(p)
               }
               return (
                  <PaginationPage page={p} currentPage={props.currentPage} setCurrentPage={setCurrentPage} />
               )
            })
         }
      </div>
   )
}
export default Paginations;