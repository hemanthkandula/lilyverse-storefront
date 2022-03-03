import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
// import { Button } from "../..";

const MainButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "grey",
    },
    fontFamily: "HelveticaNeue",
    borderRadius: 0,
    textTransform: "none",
    paddingRight: "4rem",
    paddingLeft: "4rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "small",
    marginTop: "5rem",
  },
}))(Button);

const Empty: React.FC<{ overlayHide(): void }> = ({ overlayHide }) => (
  <div className="cart__empty">
    <h4>
      <FormattedMessage defaultMessage="Your bag is empty" />
    </h4>
    <p>
      <FormattedMessage defaultMessage="You haven’t added anything to your bag. We’re sure you’ll find something in our store" />
    </p>
    <div className="cart__empty__action">
      {/* <Button */}
      {/*  testingContext="emptyCartHideOverlayButton" */}
      {/*  secondary */}
      {/*  onClick={overlayHide} */}
      {/* > */}
      {/*  <FormattedMessage defaultMessage="Continue Shopping" /> */}
      {/* </Button> */}

      <MainButton
        variant="contained"
        size="large"
        className="cart__empty__button"
        color="primary"
        onClick={overlayHide}
      >
        <span>Continue Shopping</span>
      </MainButton>
    </div>
  </div>
);

export default Empty;
