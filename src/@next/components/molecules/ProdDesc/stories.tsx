import { storiesOf } from "@storybook/react";
import React from "react";

import { ProdDesc } from ".";
import { attributes, description } from "./fixtures";

storiesOf("@components/molecules/ProdDesc", module)
  .addParameters({ component: ProdDesc })
  .add("default", () => (
    <ProdDesc attributes={attributes} description={description} />
  ));
