/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeatureProductFragment
// ====================================================

export interface FeatureProductFragment_thumbnail {
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

export interface FeatureProductFragment_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface FeatureProductFragment_attributes_attribute {
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

export interface FeatureProductFragment_attributes_values {
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

export interface FeatureProductFragment_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: FeatureProductFragment_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (FeatureProductFragment_attributes_values | null)[];
}

export interface FeatureProductFragment {
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
  thumbnail: FeatureProductFragment_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: FeatureProductFragment_thumbnail2x | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: FeatureProductFragment_attributes[];
}
