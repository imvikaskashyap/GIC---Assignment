import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Grid } from "@mui/material";
import CatDetail from "../CatDetails/CatDetails";
import CatCard from "../CatCard/CatCard";

const CatList = () => {
  const { data, loading, error, selectedCat } = useContext(DataContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {selectedCat ? (
        <CatDetail />
      ) : (
        <Grid container spacing={2}>
          {data.map((cat) => (
            <Grid item key={cat.id} xs={12} sm={6} md={4}>
              <CatCard cat={cat} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CatList;
