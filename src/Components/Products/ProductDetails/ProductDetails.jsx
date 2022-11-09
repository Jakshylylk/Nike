import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import "./ProductDetails.css";
import { productContext } from "../../../Context/ProductContextProvider";
import { useParams } from "react-router";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: "10px", marginTop: "50px" }}>
                <Typography variant="h5">{productDetails.category} </Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}{" "}
                </Typography>
                <Alert
                  icon={<AttachMoneyIcon />}
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Цена: {productDetails.price} сом
                  <Button variant="contained" sx={{ ml: "100px" }}>
                    Купить
                  </Button>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "48%" }}
                    onClick={() => deleteProduct(id)}>
                    Delete
                  </Button>
                  {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}> */}
                  <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ width: "48%" }}>
                      Edit
                    </Button>
                  </Link>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
