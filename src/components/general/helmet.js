import React from "react";
import { Helmet } from "react-helmet";

export const SiteHelmet = props => (
  <Helmet>
    <title>{props.title}</title>
    <meta
      name={`${props.name}`}
      content={`${props.content}`}
    />
  </Helmet>
);
