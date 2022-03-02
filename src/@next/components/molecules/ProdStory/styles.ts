import { media, styled } from "@styles";
// import { h1FontSize } from "@styles/constants";

export const Wrapper = styled.div``;

export const ProductNameHeader = styled.h1`
  font-size: ${props => props.theme.typography.h1FontSize};
  letter-spacing: 0.02em;
  padding-bottom: 25px;
  
  font-weight: ${props => props.theme.typography.extraBoldFontWeight};
  margin-bottom: ${props => props.theme.spacing.gutter};
  margin-top: ${props => props.theme.spacing.spacer};
`;

// export const AttributeList = styled.ul`
//   columns: 2;
//   column-width: 50%;
//
//   ${media.largeScreen`
//     column-width: 100%;
//     columns: 1;
//   `};
//   width: 100%;
//   padding: 0;
//   margin: 0;
//
//   li {
//     margin-bottom: 30px;
//     font-size: ${props => props.theme.typography.h4FontSize};
//   }
//
//   li::before {
//     content: "•";
//     margin-right: 20px;
//     color: ${props => props.theme.colors.listBullet};
//   }
// `;

// export const Tabs = styled.div`
//   display: flex;
//   flex-wrap: none;
//   width: 100%;
//   border-bottom: 1px solid ${props => props.theme.colors.tabsBorder};
//   margin-bottom: 70px;
//   overflow: hidden;
// `;

export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  min-width: 230px;
  font-size: ${props => props.theme.typography.h3FontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  letter-spacing: 0.02em;
  color: ${props => props.active && props.theme.colors.tabTitle};
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.active ? props.theme.colors.tabTitle : "transparent"};
  padding-bottom: 25px;
  margin-right: 60px;

  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 150px;
    margin-right: 20px;
  `};
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.smallFontSize};


`;

export const Description = styled.p`
  // color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.h3FontSize};
   white-space: pre-wrap;
  // line-height: 2.5rem;


`;