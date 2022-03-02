import React from "react";

import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const attrs = {
  year: "Year",
  brand: "Brand",
};

export const ProdDesc: React.FC<IProps> = ({
  description = "",
  descriptionJson = "",
  name,
  attributes,
}: IProps) => {
  return (
    <S.Wrapper>
      {attributes &&
        attributes
          .filter(_attr => _attr.attribute.name.includes(attrs.brand))
          .map((attribute, index) => (
            <a key={index}>
              {/* <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "} */}
              <S.AttributeName>
                {attribute.values.map(value => value.name).join(", ")}
              </S.AttributeName>
            </a>
          ))}

      {attributes &&
        attributes
          .filter(_attr => _attr.attribute.name.includes(attrs.year))
          .map((attribute, index) => (
            <a key={index}>
              {/* <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "} */}
              <S.AttributeName>
                {attribute.values.map(value => value.name).join(", ")}
              </S.AttributeName>
            </a>
          ))}

      <S.ProductNameHeader data-test="productName">{name}</S.ProductNameHeader>

      <S.Description>
        {descriptionJson ? (
          <RichTextContent descriptionJson={descriptionJson} />
        ) : (
          { description }
        )}
      </S.Description>
    </S.Wrapper>
  );
};
