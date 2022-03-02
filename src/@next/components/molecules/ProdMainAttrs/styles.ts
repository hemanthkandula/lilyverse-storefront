import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const ProductNameHeader = styled.h3`
  text-transform: uppercase;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;



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
  color: ${props => props.theme.colors.listAttributeName};
  margin: 0;
  padding: 0;
  width: 48px;
  height: 23px;
  text-align: left;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => props.theme.colors.white};
`;


export const AttributeValue = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
  margin: 0;
  padding: 0;
  left: 1px;
  top: 30.925px;
  width: 286px;
  height: 23.788545608520508px;
  line-height: 19px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => props.theme.colors.lv_grey};
`;

