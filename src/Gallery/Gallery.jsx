import Loader from "../components/Loader/Loader";
import PaginationComponent from "../components/Pagination/Pagination";
import Photos from "../components/Photos/Photos";
import s from "./styles.module.scss";

const Gallery = ({
  photos,
  currentPage,
  totalPages,
  photosPerPage,
  onPageChange,
  isLoading,
}) => {
  return (
    <>
      <div className={s.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Photos photos={photos} isLoading={isLoading} />
            {photos.length > 0 && (
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                photosPerPage={photosPerPage}
                onPageChange={onPageChange}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Gallery;
