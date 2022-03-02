import React from "react";
import { FormattedMessage } from "react-intl";
// import { Button } from "@components/atoms";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants_pricing,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import { getProductPrice } from "@components/organisms";
import { Button } from "@material-ui/core";

export interface IAddToCartButton {
  disabled: boolean;
  onSubmit: () => void;
  variantPricing?: ProductDetails_product_variants_pricing | null;
  productPricingRange: ProductDetails_product_pricing;
}

export const AddToCartButton: React.FC<IAddToCartButton> = ({
  onSubmit,
  disabled,
  variantPricing,
  productPricingRange,
}) => {
  return (
    // <Button
    //   fullWidth
    //   testingContext="addProductToCartButton"
    //   onClick={onSubmit}
    //   color="secondary"
    //   disabled={disabled}
    // >
    //   <FormattedMessage defaultMessage="Add to bag -  "/>
    //   {/*{getProductPrice(productPricingRange, variantPricing)}*/}
    // </Button>
    <Button
      variant="outlined"
      size="large"
      onClick={onSubmit}
      color="inherit"
      disabled={disabled}
      fullWidth={true}
    >
      <FormattedMessage defaultMessage="Add to bag -  "/>
      {getProductPrice(productPricingRange, variantPricing)}
    </Button>

  );
};
AddToCartButton.displayName = "AddToCartButton";
export default AddToCartButton;
