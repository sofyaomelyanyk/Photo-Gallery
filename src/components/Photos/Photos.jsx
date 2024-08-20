import s from "./styles.module.scss";

const Photos = ({ photos }) => {
  return (
    <>
      {photos?.length && (
        <ul className={s.list}>
          {photos.map((photo) => (
            <li key={photo.id} className={s.item}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Photos;
