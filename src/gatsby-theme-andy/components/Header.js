/** @jsx jsx */
import { Link } from "gatsby";
import { Flex, Box, jsx } from "theme-ui";

export default ({ siteMetadata }) => (
  <header>
    <Flex>
      <Box
        py={2}
        px={3}
        sx={{ borderBottom: "1px solid", borderColor: "gray", width: 500 }}
      >
        <Link
          to="/"
          sx={{ fontWeight: "bold", color: "text", textDecoration: "none" }}
        >
          {siteMetadata.title}
        </Link>
      </Box>
      <Box
        py={2}
        px={3}
        sx={{
          borderBottom: "1px solid",
          borderColor: "gray",
          flex: "1",
          pr: 4,
        }}
      >
        <Link
          to="https://ko-fi.com/calebfiggers"
          target="_blank"
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            justifyContent: "flex-end",
          }}
        >
          ❤
        </Link>
      </Box>
    </Flex>
  </header>
);
