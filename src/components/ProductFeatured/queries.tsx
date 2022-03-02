import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import {
  FeatureProductFragment,
  productPricingFragment,
} from "../../views/Product/queries";
import { FeaturedProduct } from "./gqlTypes/FeaturedProduct";

export const featuredProduct = gql`
  ${FeatureProductFragment}
  ${productPricingFragment}
  query FeaturedProduct {
    shop {
      homepageCollection {
        id
        products(first: 1) {
          edges {
            node {
              ...FeatureProductFragment
              ...ProductPricingField
              category {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedFeaturedProductQuery = TypedQuery<FeaturedProduct, {}>(
  featuredProduct
);