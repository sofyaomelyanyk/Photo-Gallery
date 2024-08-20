import { Pagination } from "antd";
import s from "./styles.module.scss"

const PaginationComponent = ({
  currentPage,
  totalPages,
  photosPerPage,
  onPageChange,
}) => {
  return (
    <div className={s.paginationContainer}>
      <Pagination
        current={currentPage}
        total={totalPages * photosPerPage}
        pageSize={photosPerPage}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </div>
  );
};
export default PaginationComponent;
