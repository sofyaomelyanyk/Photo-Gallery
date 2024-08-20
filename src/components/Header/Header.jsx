import SearchComponent from "../Search/Search";

const Header = ({ handleChangeValue }) => {
  return (
    <>
      <header className="App-header">
        <SearchComponent onSearch={handleChangeValue} />
      </header>
    </>
  );
};
export default Header;
