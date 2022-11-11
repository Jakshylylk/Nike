import React from "react";
import "./ProductCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, ButtonBase, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const ProductCard = ({ productObj }) => {
  let background = productObj.color;
  let style = { background };
  return (
    <>
      {
        <Link to={`/details/${productObj.id}`}>
          <Card sx={{ maxWidth: 345, mt: "40px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={productObj.img1}
                alt="green iguana"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ display: "flex" }}>
                  Цвет: {productObj.color}
                  <Grid
                    style={style}
                    sx={{
                      width: "30px",
                      height: "30px",
                      ml: "10px",
                      border: "2px solid black",
                      borderRadius: "10px",
                    }}></Grid>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="cardText">
                  <Grid>
                    <h3 style={{ color: "black" }}>Описание:</h3>
                  </Grid>
                  {productObj.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid
              sx={{
                float: "right",
                paddingRight: "20px",
                paddingBottom: "20px",
              }}>
              <FavoriteBorderIcon sx={{ fontSize: 30 }} />
              <MapsUgcIcon sx={{ fontSize: 30, ml: 1 }} />
            </Grid>
          </Card>
        </Link>
      }
    </>
  );
};

export default ProductCard;
