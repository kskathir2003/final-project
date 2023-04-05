/* eslint-disable */
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
  },
}));

function Cart({ cartItems, handleRemoveFromCart }) {
  const classes = useStyles();

  const total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      ) : (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} />
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">${total.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button 
            variant="contained"
            color="primary"
            className={classes.checkoutButton} >
            Checkout
          </Button>
        </TableContainer>
      )}
    </Container>
  );
}

export default Cart;
