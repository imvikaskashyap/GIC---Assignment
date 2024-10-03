import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataContext } from "../../context/DataContext";

export default function PaginationControls() {
  const { page, setPage, totalCats, limit } = useContext(DataContext);

  const totalPages = Math.ceil(totalCats / limit);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        sx={{ marginRight: "10px" }}
      >
        Previous
      </Button>
      <Typography variant="body1" sx={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        disabled={page === totalPages}
        sx={{ marginLeft: "10px" }}
      >
        Next
      </Button>
    </Box>
  );
}
