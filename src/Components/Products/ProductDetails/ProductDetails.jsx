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
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { productContext } from "../../../Context/ProductContextProvider";
import { useParams } from "react-router";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { basketContext } from "../../../Context/BasketContextProvider";
import { authContext } from "../../../Context/AuthContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  const { addProductToBasket } = useContext(basketContext);
  const { user, handleLogout } = useContext(authContext);

  const { id } = useParams();

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
                <SwiperSlide>
                  <img src={productDetails.img4} alt={productDetails.title} />
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
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img4} alt={productDetails.title} />
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
                {/* ****************** */}
                <Box style={{ width: "88%" }}>
                  <Grid className="gridButtonContainer">
                    <Grid className="gridButton">
                      <button className="button"></button>
                      <button className="button"></button>
                      <button className="button"></button>
                      <button className="button"></button>
                      <button className="button"></button>
                      <button className="button"></button>
                      <button className="button"></button>
                    </Grid>
                  </Grid>

                  <Grid className="gridLinkContainer">
                    <Grid className="gridLink">
                      <a className="linkSize" href="#">
                        UK 3
                      </a>
                      <a className="linkSize" href="#">
                        UK 3.5
                      </a>
                      <a className="linkSize" href="#">
                        UK 4
                      </a>
                      <a className="linkSize" href="#">
                        UK 4.5
                      </a>
                    </Grid>
                    <Grid className="gridLink">
                      <a className="linkSize" href="#">
                        UK 5
                      </a>
                      <a className="linkSize" href="#">
                        UK 5.5
                      </a>
                      <a className="linkSize" href="#">
                        UK 6
                      </a>

                      <a className="linkSize" href="#">
                        UK 6.5
                      </a>
                    </Grid>
                    <Grid className="gridLink">
                      <a className="linkSize" href="#">
                        UK 7
                      </a>
                      <a className="linkSize" href="#">
                        UK 7.5
                      </a>
                      <a className="linkSize" href="#">
                        UK 8
                      </a>
                      <a className="linkSize" href="#">
                        UK 8.5
                      </a>
                    </Grid>
                  </Grid>
                </Box>
                {/* ****************** */}
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
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToBasket(productDetails)}>
                    <AddShoppingCart />
                  </Button>
                </Alert>
                {user.email === "admin.admin@mail.ru" ? (
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
                  </Box>
                ) : null}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
