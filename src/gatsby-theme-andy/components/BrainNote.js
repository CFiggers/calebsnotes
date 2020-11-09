/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled, ThemeProvider, Flex, Box, jsx } from "theme-ui";

import useWindowWidth from "../../../node_modules/gatsby-theme-andy/src/utils/useWindowWidth";
import components from "../../../node_modules/gatsby-theme-andy/src/components/MdxComponents";
import Footer from "./Footer";
import Popover from "../../../node_modules/gatsby-theme-andy/src/components/Popover";
import ShareButton from "./ShareButton";

import theme from "../theme";

const BrainNote = ({ note }) => {
  const [width] = useWindowWidth();

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = <Popover reference={ln} />;
      });
  }

  const AnchorTagWithPopups = (props) => (
    <components.a {...props} popups={popups} noPopups={width < 768} />
  );

  return (
    <ThemeProvider
      theme={theme}
      components={{ ...components, a: AnchorTagWithPopups }}
    >
      <div sx={{ flex: "1" }}>
        <Flex sx={{ flexDirection: "row" }}>
          <Box sx={{ width: 500 }}>
            <Styled.h1 sx={{ my: 3 }}>{note.title} </Styled.h1>
          </Box>
          <Box sx={{ pt: 3 }}>
            <ShareButton link={note.slug === "home" ? "" : note.slug} />
          </Box>
        </Flex>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>

      <Footer references={note.inboundReferenceNotes} />
    </ThemeProvider>
  );
};

export default BrainNote;
