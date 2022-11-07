import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import { Container, Grid, Paper } from "@mui/material";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Swiper
            className="mySwiper2"
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}>
            <SwiperSlide>
              <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
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
                <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
              </Paper>
            </SwiperSlide>
            <SwiperSlide>
              <Paper elevation={3}>
                <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
              </Paper>
            </SwiperSlide>
            <SwiperSlide>
              <Paper elevation={3}>
                <img src="https://www.fjordtravel.no/wp-content/uploads/2013/09/Cruise-on-Sognefjord-by-Robin-Strand-Visit-Bergen.jpg" />
              </Paper>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
