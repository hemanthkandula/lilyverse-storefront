/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeaturedProduct
// ====================================================

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Name of a value displayed in the interface.
   */
  value: string | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: FeaturedProduct_shop_homepageCollection_products_edges_node_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (FeaturedProduct_shop_homepageCollection_products_edges_node_attributes_values | null)[];
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange_stop | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing_priceRange | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  descriptionJson: any;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: FeaturedProduct_shop_homepageCollection_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: FeaturedProduct_shop_homepageCollection_products_edges_node_thumbnail2x | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: FeaturedProduct_shop_homepageCollection_products_edges_node_attributes[];
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: FeaturedProduct_shop_homepageCollection_products_edges_node_pricing | null;
  category: FeaturedProduct_shop_homepageCollection_products_edges_node_category | null;
}

export interface FeaturedProduct_shop_homepageCollection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: FeaturedProduct_shop_homepageCollection_products_edges_node;
}

export interface FeaturedProduct_shop_homepageCollection_products {
  __typename: "ProductCountableConnection";
  edges: FeaturedProduct_shop_homepageCollection_products_edges[];
}

export interface FeaturedProduct_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of products in this collection.
   */
  products: FeaturedProduct_shop_homepageCollection_products | null;
}

export interface FeaturedProduct_shop {
  __typename: "Shop";
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: FeaturedProduct_shop_homepageCollection | null;
}

export interface FeaturedProduct {
  /**
   * Return information about the shop.
   */
  shop: FeaturedProduct_shop;
}
