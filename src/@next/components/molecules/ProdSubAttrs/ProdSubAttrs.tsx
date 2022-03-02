// import divider from "../../../../images/divider.svg";
import { Divider, Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

import Orange_Blossom from "../../../../images/fragrances/Image_15.png"; // with import
import Tangerine from "../../../../images/fragrances/Image_16.png"; // with import
import Tuberose from "../../../../images/fragrances/Image_17.png"; // with import
import Ylang_Ylang from "../../../../images/fragrances/Image_18.png"; // with import
import Agave from "../../../../images/fragrances/Image_19.png"; // with import
import Vanilla from "../../../../images/fragrances/Image_20.png"; // with import
import Sandalwood from "../../../../images/fragrances/Image_21.png"; // with import
import White_Musk from "../../../../images/fragrances/Image_22.png"; // with import
import Cedarwood from "../../../../images/fragrances/Image_23.png"; // with import
import * as S from "./styles";
import { IProps } from "./types";

// const attrImages = {
//   orange_blossom: Orange_Blossom,
//   tangerine: Tangerine,
//   tuberose: Tuberose,
//   ylang_ylang: Ylang_Ylang,
//   agave: Agave,
//   tuberose: Vanilla,
//   tuberose: Sandalwood,
//   tuberose: White_Musk,
//   tuberose: Cedarwood,
// };

const attrImages = new Map([
  ["Orange Blossom", Orange_Blossom],
  ["Tuberose", Tuberose],
  ["Tangerine", Tangerine],
  ["Ylang Ylang", Ylang_Ylang],
  ["Agave", Agave],
  ["Vanilla", Vanilla],
  ["Sandalwood", Sandalwood],
  ["White Musk", White_Musk],
  ["Cedarwood", Cedarwood],
]);

const attrs = {
  opening: "Opening",
  heart: "Heart",
  baseAttr: "Base",
};
// import classNames from "classnames";
// import NewGalleryCarousel from "@temp/views/Product/NewGalleryCarousel";
const useStyles = makeStyles(theme => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "#dedede",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  divider_empty: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
}));



function FormRow(values: any[]) {
  return (
    <>
      {values.map(value => (
        <Grid
          container
          className="product-page__product__attrlist__imgattr"
          justifyContent="center"
          alignItems="center"
          direction="column"
          item
          xs={2}
        >
          {/* <img src={attrImages.get(value.name)} alt="" /> */}
          {/* {ImageComponent(value.name)} */}
          <Grid item xs={12}>
            <img src={attrImages.get(value.name)} alt="" />
          </Grid>
          <Grid item xs={12}>
            <Box component="div" visibility="hidden">
              Visibility Hidden
            </Box>
          </Grid>
          <Grid item xs={12}>
            <S.AttributeName>{value.name} </S.AttributeName>{" "}
          </Grid>
        </Grid>
      ))}
    </>
  );
}

function makeAttrDivider(divider: string) {
  return (
    <Grid container justifyContent="center" alignItems="center" item>
      <Grid item xs={12} sm={2} lg={2}>
        <p className="" />
      </Grid>
      <Grid item xs={12} sm={8} lg={8}>
        <Divider
          variant="inset"
          classes={{ root: divider }}
          className="product-page__product__attrlist__divider"
        />
      </Grid>
    </Grid>
  );
}

export const ProdSubAttrs: React.FC<IProps> = ({ attributes }: IProps) => {
  const classes = useStyles();

  function getAttrList(attrs_name: string) {
    return (
      <>
        {attributes &&
          attributes
            .filter(_attr => _attr.attribute.name.includes(attrs_name))
            .map((attribute, index) => (
              <Grid
                key={index}
                className=""
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid container item xs={12} sm={1} lg={1}>
                  <p className="product-page__product__attrlist">
                    <S.AttributeName>
                      {attribute.attribute.name}{" "}
                    </S.AttributeName>{" "}
                  </p>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={8}
                  lg={8}
                >
                  {FormRow(attribute.values)}
                </Grid>
              </Grid>
            ))}
      </>
    );
  }

  return (
    <S.Wrapper>
      {getAttrList(attrs.opening)}
      {makeAttrDivider(classes.divider)}

      {getAttrList(attrs.heart)}
      {makeAttrDivider(classes.divider)}

      {getAttrList(attrs.baseAttr)}
      {makeAttrDivider(classes.divider_empty)}
    </S.Wrapper>
  );
};
