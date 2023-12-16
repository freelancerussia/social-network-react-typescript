import React from "react";
import styles from "./../paginations.module.css"

type PaginatioPagePropsType = {
   currentPage: number
   setCurrentPage: () => void
   page: number

}
const PaginationPage = (props: PaginatioPagePropsType) => {
   return (
      <span onClick={props.setCurrentPage} className={props.currentPage === props.page ? styles.active : styles.page}>{props.page}</span>

   )
}
export default PaginationPage;