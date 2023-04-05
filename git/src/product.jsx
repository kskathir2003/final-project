import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { products } from "./data";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function Products({ handleAddToCart }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="space-between" alignItems="center">
                  <Typography variant="h6" component="span">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;