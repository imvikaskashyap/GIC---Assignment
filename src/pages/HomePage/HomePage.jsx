import { Box } from "@mui/material";
import React, { useContext } from "react";
import SearchBar from "../../components/SeachBar/SearchBar";
import CatList from "../../components/CatList/CatList";
import PaginationControls from "../../components/Pagination/PaginationControls";
import { DataContext } from "../../context/DataContext";

const HomePage = () => {

  const { selectedCat } = useContext(DataContext)

  return (
    <Box sx={{ padding: "20px" }}>
      <SearchBar />
      <CatList />
      {!selectedCat && <PaginationControls />}
    </Box>
  );
};

export default HomePage;
