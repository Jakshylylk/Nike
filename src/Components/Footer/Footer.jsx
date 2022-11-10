import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 3, sm: 5 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="black"
          color="white"
          sx={{ mt: "50px" }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} style={{ textAlign: "center" }}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  СONTACT
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    +996 777 77 77 77
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    BISHKEK, street TABYSHALIEVA 29
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  INFO
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    DELIVERY
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    ABOUT US
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    CONTACTS
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>

                    NEWS

                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  CATEGORY


                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>

                    MAN
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>

                    WOMAN
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid>
              <img
                src="https://miro.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg"
                alt="logo"
                style={{
                  width: "150px",
                  display: "flex",
                  margin: "50px auto 0 auto",
                }}
              />
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 0, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
              <TelegramIcon />
              <InstagramIcon />
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
