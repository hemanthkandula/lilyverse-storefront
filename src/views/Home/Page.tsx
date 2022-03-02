import { Button, Grid, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as React from "react";
import { useState } from "react";
import { useIntl } from "react-intl";
// import homevideo from "../../videos/HomeVideo.mp4";
import { ParallaxBanner } from "react-scroll-parallax";
import { ProductFeatured } from "src/components/ProductFeatured";

import * as S from "@temp/components/ProductFeatured/styles";

import { ProductsFeatured } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
// import { generateCategoryUrl } from "../../core/utils";
import noPhotoImg from "../../images/no-photo.svg";
import homeVideo from "../../videos/homevideo.mp4";
import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./gqlTypes/ProductsList";

import p1 from "images/collection_products/p1.png";
import p2 from "images/collection_products/p2.png";
import p3 from "images/collection_products/p3.png";
import p4 from "images/collection_products/p4.png";
import p5 from "images/collection_products/p5.png";
import p6 from "images/collection_products/p6.png";
import p7 from "images/collection_products/p7.png";
import p8 from "images/collection_products/p8.png";

import "./scss/index.scss";

const attrImages = new Map([
  ["All", p1],
  ["Chypre", p2],
  ["Citrus", p3],
  ["Floral", p4],
  ["Fruity", p5],
  ["Green", p6],
  ["Oriental", p7],
  ["Woody", p8],
]);
// const MainButton = withStyles((theme: Theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: "transparent",
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//     fontFamily: "Helvetica Neue",
//     borderRadius: 0,
//     textTransform: "none",
//     padding: "1rem 4rem",
//     fontSize: "small",
//     marginTop: "5rem",
//   },
// }))(Button);

const MainButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    fontFamily: "Helvetica Neue",
    borderRadius: 0,
    textTransform: "none",
    paddingRight: "3rem",
    paddingLeft: "4rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "small",
    marginTop: "5rem",
  },
}))(Button);

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

  // for (const [index, category] of categories.edges.entries()) {
  //   if (index % 2) {
  //     items.push(
  //       <span
  //         className="home-page__categories__titles_reg"
  //         key={category.node.id}
  //       >
  //         {category.node.name}
  //       </span>
  //     );
  //   } else {
  //     items.push(
  //       <span
  //         className="home-page__categories__titles_italic"
  //         key={category.node.id}
  //       >
  //         {category.node.name}
  //       </span>
  //     );
  //   }
  // }

  // function setBcgImg(backgroundImage: ProductsList_categories_edges_node_backgroundImage) {
  //
  // }
  categories.edges.sort((a, b) => (a.node.name > b.node.name ? 1 : -1));
  const [BgImg, setBcgImg] = useState(
    categories.edges[0].node.backgroundImage.url
  );

  const [current_collection_name, setcollectionName] = useState(
    categories.edges[0].node.name
  );

  const onClickCollection = (url, name) => {
    setBcgImg(url);
    setcollectionName(name);
  };

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>

      <div
        className="home-page__hero"
        // style={
        //   backgroundImage
        //     ? { backgroundImage: `url(${backgroundImage.url})` }
        //     : null
        // }
      >
        {/* <ReactPlayer */}
        {/*    className='react-player fixed-bottom' */}
        {/*    url="/videos/HomeVideo.mp4" */}
        {/*    width='100%' */}
        {/*    height='100%' */}
        {/*    controls = {true} */}
        {/*  /> */}
        <video autoPlay loop muted id="video" className="home-page-video">
          <source
            // src={`${process.env.PUBLIC_URL}/homevideo.mp4`}
            src={homeVideo}
            type="video/mp4"
          />
        </video>
        <div className="home-page__hero-text">
          <p>
            <span className="home-page__hero-text_reg">A </span>
            <span className="home-page__hero-text_italic">Poetry </span>
            <span className="home-page__hero-text_reg">of </span>
          </p>
          <p>
            <span className="home-page__hero-text_reg">scent </span>
          </p>
        </div>
        <div className="bottom_aligner" />

        <div className="home-page__hero__center ">
          <div className="home-page__hero-text">
            <p className="home-page__hero__center_reg">
              Perfume is an art form.
            </p>
            <p className="home-page__hero__center_reg">
              It’s only when we learn the story behind it,
            </p>
            <p className="home-page__hero__center_reg">
              that our emotions truly link.
            </p>
          </div>
          <MainButton
            variant="outlined"
            size="large"
            color="inherit"
            className="home-page__hero__center_button"
          >
            Our Philosophy
          </MainButton>
        </div>

        {/* <div className="home-page__hero-text"> */}
        {/*  <h1>A Poetry of</h1> */}

        {/*  <div> */}
        {/*    <span className="home-page__hero__title"> */}
        {/*      <h1>A Poetry of</h1> */}
        {/*    </span> */}
        {/*  </div> */}
        {/*  <div> */}
        {/*    <span className="home-page__hero__title"> */}
        {/*      <h1>scent</h1> */}
        {/*    </span> */}
        {/*  </div> */}
        {/* </div> */}
        {/* <div className="home-page__hero-action"> */}
        {/*  {loading && !categories ? ( */}
        {/*    <Loader /> */}
        {/*  ) : ( */}
        {/*    categoriesExist() && ( */}
        {/*      <Link */}
        {/*        to={generateCategoryUrl( */}
        {/*          categories.edges[0].node.id, */}
        {/*          categories.edges[0].node.name */}
        {/*        )} */}
        {/*      > */}
        {/*        <Button testingContext="homepageHeroActionButton"> */}
        {/*          <FormattedMessage defaultMessage="Shop sale" /> */}
        {/*        </Button> */}
        {/*      </Link> */}
        {/*    ) */}
        {/*  )} */}
        {/* </div> */}
      </div>
      {/* <ProductsFeatured */}
      {/*  title={intl.formatMessage({ defaultMessage: "Featured" })} */}
      {/* /> */}
      <ProductFeatured
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />

      {categoriesExist() && (
        <ParallaxBanner
          layers={[
            { image: BgImg || noPhotoImg, speed: -40 },
            // { image: bg_story, speed: -10 },
          ]}
          className="aspect-[2/1] home-page__categories"
        >
          {/* <div */}
          {/*  className="home-page__categories" */}
          {/*  // style={{ backgroundImage: `url(${BgImg})`, height: "500px" }} */}
          {/*  // style={{ */}
          {/*  //   backgroundImage: `url(${BgImg || noPhotoImg})`, */}
          {/*  // }} */}
          {/* > */}
          {/* <div className="container"> */}
          {/* <div className="home-page__categories__titles">{items}</div> */}

          {/* <div className="home-page__categories__list"> */}
          {/*  {categories.edges.map(({ node: category }) => ( */}
          {/*    <div key={category.id}> */}
          {/*      <Link */}
          {/*        to={generateCategoryUrl(category.id, category.name)} */}
          {/*        key={category.id} */}
          {/*      > */}
          {/*        <div */}
          {/*          className={classNames( */}
          {/*            "home-page__categories__list__image", */}
          {/*            { */}
          {/*              "home-page__categories__list__image--no-photo": !category.backgroundImage, */}
          {/*            } */}
          {/*          )} */}
          {/*          style={{ */}
          {/*            backgroundImage: `url(${ */}
          {/*              category.backgroundImage */}
          {/*                ? category.backgroundImage.url */}
          {/*                : noPhotoImg */}
          {/*            })`, */}
          {/*          }} */}
          {/*        /> */}
          {/*        <h3>{category.name}</h3> */}
          {/*      </Link> */}
          {/*    </div> */}
          {/*  ))} */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}

          <Grid
            className="home-page__categories__content"
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} lg={12}>
              <div className="home-page__categories__content">
                <div className="home-page__categories__content--fixed">
                  <div className="home-page__categories__titles">
                    <ul>
                      {categories.edges
                        // .sort((a, b) => (a.node.name > b.node.name ? 1 : -1))
                        .map(({ node: category }, index) => (
                          <li key={category.id}>
                            {index % 2 ? (
                              // eslint-disable-next-line jsx-a11y/anchor-is-valid
                              <a
                                className="home-page__categories__titles_reg"
                                key={category.id}
                                onClick={() =>
                                  // setBcgImg(category.backgroundImage.url)
                                  onClickCollection(
                                    category.backgroundImage.url,
                                    category.name
                                  )
                                }
                              >
                                {category.name}
                              </a>
                            ) : (
                              // eslint-disable-next-line jsx-a11y/anchor-is-valid
                              <a
                                className="home-page__categories__titles_italic"
                                key={category.id}
                                onClick={() =>
                                  onClickCollection(
                                    category.backgroundImage.url,
                                    category.name
                                  )
                                }
                              >
                                {category.name}
                              </a>
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <div className="home-page__categories__center">
                <div className="home-page__categories__center__circle">
                  <img src={attrImages.get(current_collection_name)} alt="" />
                </div>
              </div>
            </Grid>
          </Grid>
        </ParallaxBanner>
      )}

      <ProductsFeatured
        title={intl.formatMessage({ defaultMessage: "Our Best Seller" })}
      />

      <div className="home-page__quiz">
        <div>
          <p className="home-page__quiz__text_med">FIND YOUR</p>

          <p className="home-page__quiz__text_meditalic">PERFECT</p>

          <p className="home-page__quiz__text_med">SCENT</p>
        </div>

        <MainButton
          variant="outlined"
          size="large"
          className="home-page__quiz__button"
          color="inherit"
          endIcon={<NavigateNextIcon />}

        >
          <S.AttributeButton>
            Start the quiz
          </S.AttributeButton>
        </MainButton>
      </div>
    </>
  );
};

export default Page;
