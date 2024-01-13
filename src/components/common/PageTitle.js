import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? ` ${title} | naginay shop : Dashboard and point of Sale`
          : "naginay shop : Dashboard and point of Sale"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "naginay shop : Dashboard and point of Sale"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
