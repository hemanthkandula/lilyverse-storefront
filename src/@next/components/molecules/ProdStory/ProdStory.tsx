import React from "react";
import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";


export const ProdStory: React.FC<IProps> = ({
  description = "",
  descriptionJson = "",
}: IProps) => {

  return (
    <S.Wrapper>
      <S.Description>{(descriptionJson ? (
          <RichTextContent descriptionJson={descriptionJson} />
        ) : (
         {description}
      ))}
      </S.Description>
    </S.Wrapper>
  );
};
