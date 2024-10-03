import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { DataContext } from "../../context/DataContext";
import { ChevronLeftIcon } from "lucide-react";

const CatDetail = () => {
  const { selectedCat, setSelectedCat } = useContext(DataContext);

  if (!selectedCat)
    return <Typography variant="h6">No cat selected!</Typography>;

  const handleBack = () => {
    setSelectedCat(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button
        variant="contained"
        color="inherit"
        onClick={handleBack}
        sx={{ mb: 2 }}
      >
        <ChevronLeftIcon />
      </Button>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mb: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: 400 }, height: { xs: 300, md: 400 } }}
          image={selectedCat.url}
          alt={`${selectedCat.breeds[0].name} image`}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {selectedCat.breeds[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {selectedCat.breeds[0].description}
          </Typography>
          <Typography variant="h6">Temperament:</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedCat.breeds[0].temperament}
          </Typography>
          <Typography variant="h6">Life Span:</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedCat.breeds[0].life_span} years
          </Typography>
          <Typography variant="h6">Weight:</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedCat.breeds[0].weight.imperial} lbs (
            {selectedCat.breeds[0].weight.metric} kg)
          </Typography>
          <Typography variant="h6">Origin:</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedCat.breeds[0].origin}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link
              href={selectedCat.breeds[0].wikipedia_url}
              target="_blank"
              rel="noopener"
            >
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Typography variant="h6">Additional Resources:</Typography>
        <Typography variant="body2">
          <Link
            href={selectedCat.breeds[0].cfa_url}
            target="_blank"
            rel="noopener"
          >
            CFA Page
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            href={selectedCat.breeds[0].vetstreet_url}
            target="_blank"
            rel="noopener"
          >
            Vetstreet Page
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            href={selectedCat.breeds[0].vcahospitals_url}
            target="_blank"
            rel="noopener"
          >
            VCA Hospitals Page
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default CatDetail;
