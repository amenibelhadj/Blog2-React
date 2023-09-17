import React from "react";
import { TextArea } from "components";

export default {
  title: "blog2/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
