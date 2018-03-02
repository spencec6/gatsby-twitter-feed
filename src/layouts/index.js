import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "react-emotion";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <Wrapper>{children()}</Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

const Wrapper = styled("div")`
  margin: 20px;
`;
