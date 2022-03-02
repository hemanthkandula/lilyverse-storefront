import isEqual from "lodash/isEqual";
import * as React from "react";

import { Thumbnail } from "@components/molecules";
import * as S from "@components/molecules/ProdMainAttrs/styles";

import { TaxedMoney } from "../../@next/components/containers";
import { FeaturedProducts_shop_homepageCollection_products_edges_node } from "../ProductsFeatured/gqlTypes/FeaturedProducts";

import "./scss/index.scss";

interface ProductListItemProps {
  product: FeaturedProducts_shop_homepageCollection_products_edges_node;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { category } = product;
  const price = product.pricing?.priceRange?.start;
  const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;

  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
      return <TaxedMoney taxedMoney={price} />;
    }
    return (
      <>
        <span className="product-list-item__undiscounted_price">
          <TaxedMoney taxedMoney={priceUndiscounted} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TaxedMoney taxedMoney={price} />
      </>
    );
  };
  return (
    <div className="product-list-item">
      <div className="product-list-item__image">
        <Thumbnail source={product} />
      </div>
      <h4 className="product-list-item__title">
        {product.name} {","}{" "}
        {product.attributes
          .filter(_attr => _attr.attribute.name.includes("Brand"))
          .map((attribute, index) => (
            <span key={index}>
              {attribute.values.map(value => value.name).join(", ")}
            </span>
          ))}
      </h4>

      <p className="product-list-item__category">{category?.name}</p>
      <p className="product-list-item__price">{getProductPrice()}</p>
    </div>
  );
};

export default ProductListItem;
