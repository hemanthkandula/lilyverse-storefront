import { storiesOf } from "@storybook/react";
import React from "react";

import { ProdMainAttrs } from ".";
import { attributes, description } from "./fixtures";

storiesOf("@components/molecules/ProdDesc", module)
  .addParameters({ component: ProdMainAttrs })
  .add("default", () => (
    <ProdMainAttrs attributes={attributes} description={description} />
  ));
