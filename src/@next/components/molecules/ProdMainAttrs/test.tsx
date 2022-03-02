import { mount, shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { ProdMainAttrs } from ".";
import { attributes, description } from "./fixtures";
import * as S from "./styles";

describe("<ProdDesc />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <ProdMainAttrs attributes={attributes} description={description} />
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("should contain and show by default product description", () => {
    const wrapper = shallow(
      <ProdMainAttrs attributes={attributes} description={description} />
    );

    expect(wrapper.text()).toContain(description);
  });

  it("should show product attributes when clicking on attributes tab", () => {
    const wrapper = mount(
      <ProdMainAttrs attributes={attributes} description={description} />
    );

    wrapper.find(S.TabTitle).at(1).simulate("click");

    attributes.forEach(attribute =>
      expect(wrapper.text()).toContain(attribute.attribute.name)
    );
  });
});
