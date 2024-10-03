import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const StyledCard = styled(Card)({
  margin: "10px",
});

export default function CatCard({ cat }) {
  const { setSelectedCat } = useContext(DataContext);

  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => setSelectedCat(cat)}>
        <CardMedia
          component="img"
          height="300"
          image={cat.url}
          alt={cat.breeds[0]?.name || "Cat"}
          style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat.breeds[0]?.name || "Unknown Cat"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This is a lovely cat breed with unique features.
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
