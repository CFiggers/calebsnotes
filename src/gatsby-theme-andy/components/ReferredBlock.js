/** @jsx jsx */
import React from "react";
import { LinkToStacked } from "../../../node_modules/gatsby-theme-andy/src/components/CustomLinkToStacked.js";
import { Link } from "gatsby";
import { Styled, jsx, Heading } from "theme-ui";

import useWindowWidth from "../../../node_modules/gatsby-theme-andy/src/utils/useWindowWidth.js";

export default ({ references }) => {
  const [width] = useWindowWidth();

  if (references.length > 0) {
    const RefLink = width < 768 ? Link : LinkToStacked;

    return (
      <>
        <Heading as="h4" color="#18295a" sx={{ fontSize: "18px" }}>
          This Page is Referenced in...
        </Heading>
        <div sx={{ mb: 2 }}>
          {references.map((reference) => {
            return (
              <RefLink
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    color: "text",
                  },
                }}
                to={`/${reference.slug}`}
                key={reference.slug}
              >
                <div sx={{ py: 2 }}>
                  <Styled.p
                    sx={{
                      fontSize: 2,
                      m: 0,
                      color: "#612fc1",
                      fontWeight: "700",
                    }}
                  >
                    {reference.title}
                  </Styled.p>
                  <Styled.p sx={{ fontSize: 1, m: 0, color: "black" }}>
                    {reference.childMdx.excerpt}
                  </Styled.p>
                </div>
              </RefLink>
            );
          })}
        </div>
        <hr sx={{ mx: "auto", width: 64 }} />
      </>
    );
  }
  return null;
};
