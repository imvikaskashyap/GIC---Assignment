import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataContext } from "../../context/DataContext";

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
  "&:hover": {
    backgroundColor: theme.palette.grey[400],
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: "400px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function SearchBar() {
  const { setQuery } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
    >
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for cat breed..."
          value={searchTerm}
          onChange={handleSearchChange}
          inputProps={{ "aria-label": "search" }}
        />
      </SearchWrapper>
    </Box>
  );
}
