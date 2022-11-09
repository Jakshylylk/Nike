import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { basketContext } from "../../Context/BasketContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Bassket.css";

const Bassket = () => {
  const {
    productsInBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
  } = useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3"> My Basket</Typography>
        {productsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableBody>
                  {productsInBasket.products.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell> {elem.item.title} </TableCell>
                      <TableCell>{elem.item.model}</TableCell>
                      <TableCell>
                        <img src={elem.item.img1} alt="Apple" width={40} />
                      </TableCell>
                      <TableCell> {elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={e =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} сом</TableCell>
                      <TableCell
                        onClick={() => deleteBasketProduct(elem.item.id)}>
                        <DeleteForeverIcon
                          color="primary"
                          className="deleteIconBasket"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ margin: "20px auto" }}>
              Buy now for {productsInBasket.totalPrice}
            </Button>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Bassket;
