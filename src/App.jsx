import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Divider } from "antd";

import fetchPhotos from "./api/fetchPhotos";
import SearchComponent from "./components/Search/Search";

import Gallery from "./Gallery/Gallery";
import Header from "./components/Header/Header";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("book");
  const [isLoading, setIsLoading] = useState(true);
  const photosPerPage = 20;
  const totalPages = 10;

  useEffect(() => {
    const loadPhotos = async (page) => {
      setIsLoading(true);
      const data = await fetchPhotos(value, page, photosPerPage);

      if (data) {
        setPhotos(data);
      }
      setIsLoading(false);
    };

    loadPhotos(currentPage);
  }, [currentPage, value]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleChangeValue = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <div className="App">
      <Header handleChangeValue={handleChangeValue} />
      <Divider
        style={{
          borderColor: "#999999",
          margin: 0,
        }}
      />
      <Gallery
        photos={photos}
        currentPage={currentPage}
        totalPages={totalPages}
        photosPerPage={photosPerPage}
        onPageChange={handlePageChange}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
