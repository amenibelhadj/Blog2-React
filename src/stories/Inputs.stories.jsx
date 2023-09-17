import React from "react";

import { Input } from "components";

export default {
  title: "blog2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "gray_301",
  size: "xs",
  variant: "outline",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
