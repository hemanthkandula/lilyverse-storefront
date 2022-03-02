import { storiesOf } from "@storybook/react";
import React from "react";

import { ProdSubAttrs } from ".";
import { attributes, description } from "./fixtures";

storiesOf("@components/molecules/ProdSubAttrs", module)
  .addParameters({ component: ProdSubAttrs })
  .add("default", () => (
    <ProdSubAttrs attributes={attributes} description={description} />
  ));
