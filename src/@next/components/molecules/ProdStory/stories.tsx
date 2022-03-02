import { storiesOf } from "@storybook/react";
import React from "react";

import { ProdStory } from ".";
import { attributes, description } from "./fixtures";

storiesOf("@components/molecules/ProdStory", module)
  .addParameters({ component: ProdStory })
  .add("default", () => (
    <ProdStory attributes={attributes} description={description} />
  ));
