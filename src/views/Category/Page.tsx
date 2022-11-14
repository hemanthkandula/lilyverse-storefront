import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { IFilterAttributes, IFilters } from "@types";
import { ParallaxBanner } from "react-scroll-parallax";
import all_bg from "images/collection_products/All_collections.png";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
} from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

import { Category_category } from "./gqlTypes/Category";
import { CategoryProducts_products } from "./gqlTypes/CategoryProducts";
// import {ProductsList_categories} from "@temp/views/Home/gqlTypes/ProductsList";
import { CategoryList_categories } from "./gqlTypes/CategoryList";

interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> {}

interface PageProps {
  categories: CategoryList_categories;
  activeFilters: number;
  attributes: IFilterAttributes[];
  activeSortOption: string;
  category: Category_category;
  displayLoader: boolean;
  filters: IFilters;
  hasNextPage: boolean;
  products: CategoryProducts_products;
  sortOptions: SortOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

const Page: React.FC<PageProps> = ({
  activeFilters,
  categories,
  activeSortOption,
  attributes,
  category,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  sortOptions,
  onAttributeFiltersChange,
}) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };

  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );
  const hasProducts = canDisplayProducts && !!products.totalCount;
  const [showFilters, setShowFilters] = React.useState(false);
  const intl = useIntl();

  const getAttribute = (attributeSlug: string, valueSlug: string) => {
    return {
      attributeSlug,
      valueName: attributes
        .find(({ slug }) => attributeSlug === slug)
        .values.find(({ slug }) => valueSlug === slug).name,
      valueSlug,
    };
  };

  const activeFiltersAttributes =
    filters &&
    filters.attributes &&
    Object.keys(filters.attributes).reduce(
      (acc, key) =>
        acc.concat(
          filters.attributes[key].map(valueSlug => getAttribute(key, valueSlug))
        ),
      []
    );
  const [BgImg, setBcgImg] = useState(null);
  const [collectionName, setcollectionName] = useState("All");
  const onClickCollection = (url, name) => {
    setBcgImg(url);
    setcollectionName(name);
  };
  const [navbar, setNavbar] = useState(false);

  const chnagebg = () => {
    if (window.scrollY >= window.innerHeight * 0.2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", chnagebg);
  return (
    <div className="category">
      <nav
        className={navbar ? "category__header active" : "category__header"}>
        {categoriesExist() && (
          <ParallaxBanner
            layers={[
              { image: BgImg || all_bg, speed: -40 },
              // { image: bg_story, speed: -10 },
            ]}
            className="aspect-[2/1] category__categories"
          >
            <Grid
              className="category__categories__content"
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Grid item xs={12} sm={12} lg={12}>
                <div className="category__categories__head">
                  {collectionName}
                </div>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <div className="category__categories__tabs">
                  <div className="category__categories__titles">
                    <ul>
                      {categories.edges
                        .sort((a, b) => (a.node.name > b.node.name ? 1 : -1))
                        .map(({ node: category }, index) => (
                          <li key={category.id}>
                            {index % 2 ? (
                              // eslint-disable-next-line jsx-a11y/anchor-is-valid
                              <a
                                className="category__categories__titles_reg"
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
                                className="category__categories__titles_italic"
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
              </Grid>
            </Grid>
          </ParallaxBanner>
        )}
      </nav>
      <div className="container">
        <Breadcrumbs breadcrumbs={extractBreadcrumbs(category)} />
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <ProductListHeader
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={products ? products.totalCount : 0}
          activeFilters={activeFilters}
          activeFiltersAttributes={activeFiltersAttributes}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
          onChange={onOrder}
          onCloseFilterAttribute={onAttributeFiltersChange}
        />
        {canDisplayProducts && (
          <ProductList
            products={products.edges.map(edge => edge.node)}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        )}
      </div>

      {!hasProducts && (
        <ProductsFeatured
          title={intl.formatMessage(commonMessages.youMightLike)}
        />
      )}
    </div>
  );
};

export default Page;
