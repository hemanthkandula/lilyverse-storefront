import "./scss/index.scss";

import * as React from "react";

import { AlertManager, useAlert } from "react-alert";
import { useIntl, IntlShape } from "react-intl";
import { commonMessages } from "@temp/intl";
import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { accountConfirmUrl } from "../../../app/routes";

import { Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { RegisterAccount } from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

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
const showSuccessNotification = (
  data: RegisterAccount,
  hide: () => void,
  alert: AlertManager,
  intl: IntlShape
) => {
  const successful = maybe(() => !data.accountRegister.errors.length);

  if (successful) {
    hide();
    alert.show(
      {
        title: data.accountRegister.requiresConfirmation
          ? intl.formatMessage({
              defaultMessage:
                "Please check your e-mail for further instructions",
            })
          : intl.formatMessage({ defaultMessage: "New user has been created" }),
      },
      { type: "success", timeout: 5000 }
    );
  }
};

const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const alert = useAlert();
  const intl = useIntl();

  return (
    <TypedAccountRegisterMutation
      onCompleted={data => showSuccessNotification(data, hide, alert, intl)}
    >
      {(registerCustomer, { loading, data }) => {
        return (
          <Form
            errors={maybe(() => data.accountRegister.errors, [])}
            onSubmit={(event, { email, password }) => {
              event.preventDefault();
              const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
              registerCustomer({ variables: { email, password, redirectUrl } });
            }}
          >
            <TextField
              name="email"
              autoComplete="email"
              label={intl.formatMessage(commonMessages.eMail)}
              type="email"
              required
            />
            <TextField
              name="password"
              autoComplete="password"
              label={intl.formatMessage(commonMessages.password)}
              type="password"
              required
            />
            <div className="login__content__button">
              {/* <Button */}
              {/*  testingContext="submitRegisterFormButton" */}
              {/*  type="submit" */}
              {/*  {...(loading && { disabled: true })} */}
              {/* > */}
              {/*  {loading */}
              {/*    ? intl.formatMessage(commonMessages.loading) */}
              {/*    : intl.formatMessage({ defaultMessage: "Register" })} */}
              {/* </Button> */}

              <MainButton
                variant="contained"
                size="large"
                className="cart__empty__button"
                type="submit"
                {...(loading && { disabled: true })}
              >
                <span>
                  {" "}
                  {loading
                    ? intl.formatMessage(commonMessages.loading)
                    : intl.formatMessage({ defaultMessage: "Register" })}
                </span>
              </MainButton>
            </div>
          </Form>
        );
      }}
    </TypedAccountRegisterMutation>
  );
};

export default RegisterForm;
