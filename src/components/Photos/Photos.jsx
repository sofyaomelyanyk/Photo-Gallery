import { Image } from "antd";
import s from "./styles.module.scss";

const Photos = ({ photos }) => {
  return (
    <>
      {photos?.length && (
        <ul className={s.list}>
          {photos.map((photo) => (
            <li key={photo.id} className={s.item}>
              <Image
                src={photo.urls.small}
                alt={photo.alt_description}
                height={250}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Photos;
