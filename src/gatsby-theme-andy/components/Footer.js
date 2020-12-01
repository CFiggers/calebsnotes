/** @jsx jsx */
import { Styled, jsx, Box } from "theme-ui";

import ReferredBlock from "./ReferredBlock";

const Footer = ({ references }) => {
  return (
    <Box p={3} sx={{ borderRadius: 2 }} mb={2} bg="#b0b0bf" color="#18295a">
      <ReferredBlock references={references} />
      <p sx={{ m: 0, fontSize: 1 }}>
        I'd love to hear from you! You can{" "}
        <Styled.a
          sx={{ textDecoration: "underline", color: "#077b08" }}
          href="https://twitter.com/messages/compose?recipient_id=1236760268727889921"
          target="_blank"
        >
          direct message me
        </Styled.a>{" "}
        on Twitter or{" "}
        <Styled.a
          sx={{ textDecoration: "underline", color: "#077b08" }}
          href="mailto:cdfiggers@gmail.com"
        >
          email me
        </Styled.a>{" "}
        any time. If you want, you can{" "}
        <Styled.a
          sx={{ textDecoration: "underline", color: "#077b08" }}
          href="https://ko-fi.com/calebfiggers"
          target="_blank"
        >
          Support me on Ko-fi {"<3"}
        </Styled.a>
        {""}
      </p>
    </Box>
  );
};

export default Footer;
