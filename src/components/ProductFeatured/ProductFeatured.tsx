// import divider from "../../../../images/divider.svg";
import { Button, Grid, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import classNames from "classnames";
import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import React from "react";
import { Link } from "react-router-dom";

import { generateProductUrl, maybe } from "@temp/core/utils";

import { TypedFeaturedProductQuery } from "./queries";
import * as S from "./styles";

import "./scss/index.scss";

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
    paddingRight: "1rem",
    paddingLeft: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "small",
    marginTop: "5rem",
  },
}))(Button);

export const ProductFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="product-featured">
              <Grid
                className="product-featured__product__main_element"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={4} lg={4}>
                  <div className="product-featured__product__info">
                    <div
                      className={classNames(
                        "product-featured__product__info--fixed"
                      )}
                    >
                      <S.AttributeName>Sentale </S.AttributeName>
                      <S.AttributeBrand>of the </S.AttributeBrand>
                      <S.AttributeName>week</S.AttributeName>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <div className="product-featured__image">
                    <img
                      className="product-featured__image__img"
                      src={products[0].node.thumbnail.url}
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <div className="product-featured__product__attr">
                    <div
                      className={classNames(
                        "product-featured__product__attr--fixed"
                      )}
                    >
                      <div>
                        <p className="product-featured__product__attrlist">
                          <S.AttributeName>
                            {products[0].node.name}
                          </S.AttributeName>
                          <S.AttributeBrand>
                            {/* {products[0].node.attributes. */}
                            {/*  // .filter(_attr => _attr.attribute.name.includes("Brand")) */}
                            {/*  .map((attribute, index) => ( */}
                            {/*    <a key={index}> */}
                            {/*      /!* <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "} *!/ */}
                            {/*      <S.AttributeName> */}
                            {/*        {attribute.values.map(value => value.name).join(", ")} */}
                            {/*      </S.AttributeName> */}
                            {/*    </a> */}
                            {/*  ))} */}
                          </S.AttributeBrand>
                        </p>
                        <p>
                          <S.AttributeValue>
                            {/* {products[0].node.descriptionJson} */}
                            {products[0].node.descriptionJson && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: sanitize(
                                    draftToHtml(
                                      JSON.parse(
                                        products[0].node.descriptionJson
                                      )
                                    )
                                  ),
                                }}
                              />
                            )}
                          </S.AttributeValue>
                        </p>
                        <Link
                          to={generateProductUrl(
                            products[0].node.id,
                            products[0].node.name
                          )}
                        >
                          <MainButton
                            variant="outlined"
                            size="large"
                            color="inherit"
                            className="home-page__hero__center_button"
                            endIcon={<NavigateNextIcon />}
                          >
                            <S.AttributeButton>
                              Discover the fragrance
                            </S.AttributeButton>
                          </MainButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductQuery>
  );
};
