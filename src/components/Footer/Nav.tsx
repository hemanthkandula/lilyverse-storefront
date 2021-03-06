import * as React from "react";
import * as appPaths from "@temp/app/routes";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={3} lg={3}>
            <div className="footer-nav__center">
              <Link to={appPaths.baseUrl}>
                {/* <ReactSVG path={logoImg}  /> */}
                {/* <img src={logoImg} alt="logo" /> */}
                <span className="footer-nav__center_reg">Lilyverse</span>
              </Link>
            </div>
          </Grid>

          <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <Grid item xs={12} sm={3} lg={3}>
                  <div className="footer-nav__section" key={item.id}>
                    <h4 className="footer-nav__section-header">
                      <NavLink item={item} />
                    </h4>
                    <div className="footer-nav__section-content">
                      {item.children.map(subItem => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))}
                    </div>
                  </div>
                </Grid>
              ));
            }}
          </TypedSecondaryMenuQuery>

          <Grid item xs={12} sm={12} lg={12} />

          <Grid item xs={12} sm={12} lg={12} />
        </Grid>

        {/* <div className="container"> */}

        {/*  <TypedSecondaryMenuQuery> */}
        {/*    {({ data }) => { */}
        {/*      return data.shop.navigation.secondary.items.map(item => ( */}
        {/*        <div className="footer-nav__section" key={item.id}> */}
        {/*          <h4 className="footer-nav__section-header"> */}
        {/*            <NavLink item={item} /> */}
        {/*          </h4> */}
        {/*          <div className="footer-nav__section-content"> */}
        {/*            {item.children.map(subItem => ( */}
        {/*              <p key={subItem.id}> */}
        {/*                <NavLink item={subItem} /> */}
        {/*              </p> */}
        {/*            ))} */}
        {/*          </div> */}
        {/*        </div> */}
        {/*      )); */}
        {/*    }} */}
        {/*  </TypedSecondaryMenuQuery> */}
        {/* </div> */}
      </footer>
    );
  }
}

export default Nav;
