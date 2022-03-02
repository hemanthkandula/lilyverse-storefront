import * as React from "react";
import { Link } from "react-router-dom";

import { Carousel, ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";
import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as S from "@temp/components/ProductFeatured/styles";

interface ProductsFeaturedProps {
  title?: string;
}
const MainButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    fontFamily: "Helvetica Neue",
    borderRadius: 0,
    textTransform: "none",
    paddingRight: "3rem",
    paddingLeft: "4rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "small",
    marginTop: "5rem",
  },
}))(Button);
const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <h3>
                <span className="products-featured_italic"> Our </span>
                <span className="products-featured_reg"> Best </span>
                <span className="products-featured_italic"> Seller </span>
              </h3>

              <div className="container">
                <Carousel>
                  {products.map(({ node: product }) => (
                    <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))}
                </Carousel>
              </div>
              <MainButton
                variant="outlined"
                size="large"
                className="products-featured__button"
                endIcon={<NavigateNextIcon />}

              >
                <S.AttributeButton>
                  Shop All
                </S.AttributeButton>
              </MainButton>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Featured",
};

export default ProductsFeatured;
