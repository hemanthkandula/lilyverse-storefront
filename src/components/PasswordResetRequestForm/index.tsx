import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { Form, TextField } from "..";
import { TypedPasswordResetRequestMutation } from "./queries";

import { passwordResetUrl } from "../../app/routes";
import { ResetPasswordRequest } from "./gqlTypes/ResetPasswordRequest";

const PasswordResetRequestForm: React.FC = () => {
  const intl = useIntl();

  const disableSubmit = (loading: boolean, data: ResetPasswordRequest) =>
    loading || data?.requestPasswordReset.errors.length === 0;

  const buttonMessage = (loading: boolean, data: ResetPasswordRequest) => {
    if (loading) {
      return intl.formatMessage(commonMessages.loading);
    }
    if (data?.requestPasswordReset.errors.length === 0) {
      return intl.formatMessage({ defaultMessage: "Check your inbox" });
    }
    return intl.formatMessage({ defaultMessage: "Reset password" });
  };
  const MainButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: "black",
      fontFamily: "HelveticaNeue",
      borderRadius: 0,
      textTransform: "none",
      paddingRight: "4rem",
      paddingLeft: "4rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      fontSize: "small",
      marginTop: "1rem",
    },
  }))(Button);
  return (
    <div className="password-reset-form">
      <p>
        <FormattedMessage defaultMessage="Please provide us your email address so we can share you a link to reset your password" />
      </p>
      <TypedPasswordResetRequestMutation>
        {(passwordReset, { loading, data }) => {
          return (
            <Form
              errors={data?.requestPasswordReset.errors || []}
              onSubmit={(event, { email }) => {
                event.preventDefault();
                passwordReset({
                  variables: {
                    email,
                    redirectUrl: `${window.location.origin}${passwordResetUrl}`,
                  },
                });
              }}
            >
              <TextField
                name="email"
                autoComplete="email"
                label={intl.formatMessage(commonMessages.eMail)}
                type="email"
                required
              />
              <div className="password-reset-form__button">
                {/* <Button */}
                {/*  testingContext="submit" */}
                {/*  type="submit" */}
                {/*  {...(disableSubmit(loading, data) && { disabled: true })} */}
                {/* > */}
                {/*  {buttonMessage(loading, data)} */}
                {/* </Button> */}
                <MainButton
                  variant="contained"
                  size="large"
                  className="cart__empty__button"
                  type="submit"
                  {...(disableSubmit(loading, data) && { disabled: true })}
                >
                  <span>{buttonMessage(loading, data)}</span>
                </MainButton>
              </div>
            </Form>
          );
        }}
      </TypedPasswordResetRequestMutation>
    </div>
  );
};

export default PasswordResetRequestForm;
