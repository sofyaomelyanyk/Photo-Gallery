import Search from "antd/es/input/Search";
import s from "./styles.module.scss";

const SearchComponent = ({ onSearch }) => {
  return (
    <div className={s.searchContainer}>
      <Search
        enterButton
        placeholder="search image by name"
        onSearch={onSearch}
      />
    </div>
  );
};
export default SearchComponent;
