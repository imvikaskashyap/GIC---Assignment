import { Box } from "@mui/material";
import React from "react";
import SearchBar from "../../components/SeachBar/SearchBar";
import CatList from "../../components/CatList/CatList";
import PaginationControls from "../../components/Pagination/PaginationControls";

const HomePage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <SearchBar />
      <CatList />
      <PaginationControls />
    </Box>
  );
};

export default HomePage;
