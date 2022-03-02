// import divider from "../../../../images/divider.svg";
import { Divider, makeStyles } from "@material-ui/core";
import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

const attrs = {
  aroma: "Aroma",
  persona: "Persona",
  content: "Content",
};
const useStyles = makeStyles(theme => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "#dedede",
    marginTop: "1rem",
  },
}));
export const ProdMainAttrs: React.FC<IProps> = ({ attributes }: IProps) => {
  const classes = useStyles();
  return (
    <S.Wrapper>
      {attributes &&
        attributes
          .filter(_attr => _attr.attribute.name.includes(attrs.aroma))
          .map((attribute, index) => (
            <div key={index}>
              <p className="product-page__product__attrlist">
                <S.AttributeName>{attribute.attribute.name} </S.AttributeName>{" "}
              </p>
              <p>
                <S.AttributeValue>
                  {attribute.values.map(value => value.name).join(", ")}
                </S.AttributeValue>
              </p>
            </div>
          ))}

      {/* <ReactSVG */}
      {/*  svgStyle={{ height: 10}} */}
      {/*  path={divider} */}
      {/*  className="product-page__product__attrlist__divider" */}
      {/* /> */}
      <Divider
        variant="fullWidth"
        classes={{ root: classes.divider }}
        className="product-page__product__attrlist__divider"
      />

      {attributes &&
        attributes
          .filter(_attr => _attr.attribute.name.includes(attrs.content))
          .map((attribute, index) => (
            <div key={index}>
              <p className="product-page__product__attrlist">
                <S.AttributeName>{attribute.attribute.name} </S.AttributeName>{" "}
              </p>
              <p>
                <S.AttributeValue>
                  {attribute.values.map(value => value.name).join(", ")}
                </S.AttributeValue>
              </p>
            </div>
          ))}
      <Divider
        variant="fullWidth"
        classes={{ root: classes.divider }}
        className="product-page__product__attrlist__divider"
      />

      {/* <ReactSVG */}
      {/*  svgStyle={{ height: 10}} */}
      {/*  path={divider} */}
      {/*  className="product-page__product__attrlist__divider" */}
      {/* /> */}

      {attributes &&
        attributes
          .filter(_attr => _attr.attribute.name.includes(attrs.content))
          .map((attribute, index) => (
            <div key={index}>
              <p className="product-page__product__attrlist">
                <S.AttributeName>{attribute.attribute.name} </S.AttributeName>{" "}
              </p>
              <p>
                <S.AttributeValue>
                  {attribute.values.map(value => value.name).join(", ")}
                </S.AttributeValue>
              </p>
            </div>
          ))}
    </S.Wrapper>
  );
};
