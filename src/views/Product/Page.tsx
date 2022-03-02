import { Grid } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { FormattedMessage } from "react-intl";
// import { smallScreen } from "../../globalStyles/scss/variables.scss";
import { ParallaxBanner } from "react-scroll-parallax";
// import NewGalleryCarousel from "@temp/views/Product/NewGalleryCarousel";
// import { makeStyles } from '@material-ui/core/styles';
//
// const populateBreadcrumbs = product => [
//   {
//     link: generateCategoryUrl(product.category.id, product.category.name),
//     value: product.category.name,
//   },
//   {
//     link: generateProductUrl(product.id, product.name),
//     value: product.name,
//   },
// ];
import bg_story from "src/images/para_bg.png";

// import vd_home from "src/videos/HomeVideo";
import { ProdDesc } from "@components/molecules/ProdDesc";
import { ProdMainAttrs } from "@components/molecules/ProdMainAttrs";
import { ProdStory } from "@components/molecules/ProdStory";
import { ProdSubAttrs } from "@components/molecules/ProdSubAttrs";
// import Media from "react-media";
// import { ProductDescription } from "@components/molecules";
// import { ProductGallery } from "@components/organisms";
import AddToCartSection from "@components/organisms/AddToCartSection";
import NewGalleryCarousel from "@temp/views/Product/NewGalleryCarousel";
import OtherProducts from "@temp/views/Product/Other";

import {
  // Breadcrumbs,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";
// import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
// import GalleryCarousel from "./GalleryCarousel";
// import OtherProducts from "./Other";
// import { structuredData } from "../../core/SEO/Product/structuredData";
import { IProps } from "./types";

const Page: React.FC<
  IProps & {
    queryAttributes: Record<string, string>;
    onAttributeChangeHandler: (slug: string | null, value: string) => void;
  }
> = ({ add, product, items, queryAttributes, onAttributeChangeHandler }) => {
  const overlayContext = React.useContext(OverlayContext);

  // const productGallery: React.RefObject<HTMLDivElement> = React.useRef();

  const [variantId, setVariantId] = React.useState("");

  const getImages = () => {
    if (product.variants && variantId) {
      const variant = product.variants.find(
        variant => variant.id === variantId
      );

      if (variant.images.length > 0) {
        return variant.images;
      }
    }

    return product.images;
  };

  const handleAddToCart = (variantId, quantity) => {
    add(variantId, quantity);
    overlayContext.show(OverlayType.cart, OverlayTheme.right);
  };
  // const classes = useStyles();

  const addToCartSection = (
    <AddToCartSection
      items={items}
      productId={product.id}
      name={product.name}
      productVariants={product.variants}
      productPricing={product.pricing}
      queryAttributes={queryAttributes}
      setVariantId={setVariantId}
      variantId={variantId}
      onAddToCart={handleAddToCart}
      onAttributeChangeHandler={onAttributeChangeHandler}
      isAvailableForPurchase={product.isAvailableForPurchase}
      availableForPurchase={product.availableForPurchase}
    />
  );

  const prodDesc = (
    <ProdDesc
      descriptionJson={product.descriptionJson}
      attributes={product.attributes}
      name={product.name}
    />
  );
  const prodStory = <ProdStory descriptionJson={product.descriptionJson} />;
  const prodMainAttrs = <ProdMainAttrs attributes={product.attributes} />;
  const prodSubAttrs = <ProdSubAttrs attributes={product.attributes} />;

  return (
    <div className="product-page">
      {/* <div className="container"> */}
      {/*  <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} /> */}
      {/* </div> */}
      {/* Main section */}

      <Grid
        className="product-page__product__main_element"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={4} lg={4}>
          <div className="product-page__product__info">
            <div className={classNames("product-page__product__info--fixed")}>
              {prodDesc}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <NewGalleryCarousel images={getImages()} />
          {addToCartSection}
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <div className="product-page__product__attr">
            <div className={classNames("product-page__product__attr--fixed")}>
              {prodMainAttrs}
            </div>
          </div>
        </Grid>
      </Grid>

      <ParallaxBanner
        layers={[
          { image: bg_story, speed: -40 },
          // { image: bg_story, speed: -10 },
        ]}
        className="aspect-[2/1] product-page__product__story_element"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-white font-thin">Hello World!</h1>
        </div>

        <Grid
          className="product-page__product__main_element"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} lg={12}>
            <div className="product-page__product__storytext">
              <div
                className={classNames(
                  "product-page__product__storytext--fixed"
                )}
              >
                {prodStory}
              </div>
            </div>
          </Grid>
        </Grid>
      </ParallaxBanner>

      <div className="product-page__product__fragrance_element">
        {/* <Grid item xs={2} sm={2} lg={2}> */}
        <h1 className="product-page__product__fragrance_title">
          <FormattedMessage defaultMessage="Fragrance" />
        </h1>
        {/* </Grid> */}
        {/* <Grid item xs={10} sm={10} lg={10}> */}
        {/* <div className=""> */}
        {/*  <div */}
        {/*    className={classNames( */}
        {/*      "" */}
        {/*    )} */}
        {/*  > */}
        {/*    {prodSubAttrs} */}
        {/*  </div> */}
        {/* </div> */}
        {prodSubAttrs}
        {/* </Grid> */}
      </div>

      {/* <div className="product-page__product__product_video"> */}
      {/*  /!* <video src={vd_home} autoPlay /> *!/ */}
      {/*  /!* eslint-disable-next-line jsx-a11y/media-has-caption *!/ */}
      {/*  <video className="product-page__product__product_video"> */}
      {/*    /!*<source src={vd_home} type="video/mp4" />*!/ */}
      {/*    <track srcLang="en" label="english_captions" /> */}
      {/*  </video> */}
      {/* </div> */}

      <OtherProducts products={product.category.products.edges} />
    </div>
  );
};

export default Page;
