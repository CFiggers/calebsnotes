/** @jsx jsx */
import { Link } from "gatsby";
import { Flex, Box, jsx } from "theme-ui";

export default ({ siteMetadata }) => (
  <header>
    <Flex>
      <Box
        py={2}
        px={3}
        sx={{
          borderBottom: "2px solid",
          borderColor: "black",
          width: 456,
          backgroundColor: "#18295a",
        }}
      >
        <Link
          to="/"
          sx={{ fontWeight: "bold", color: "#8ce1fb", textDecoration: "none" }}
        >
          {siteMetadata.title}
        </Link>
      </Box>
      <Box
        py={2}
        px={3}
        sx={{
          borderBottom: "2px solid",
          borderColor: "black",
          width: 120,
          backgroundColor: "#18295a",
        }}
      >
        <Link
          to="https://ko-fi.com/calebfiggers"
          target="_blank"
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            justifyContent: "flex-end",
            color: "#ffd966",
          }}
        >
          Support&nbsp;❤
        </Link>
      </Box>
      <Box
        py={2}
        px={1}
        sx={{
          borderBottom: "2px solid",
          borderColor: "black",
          flex: "1",
          pr: 4,
          backgroundColor: "#18295a",
          width: 100,
        }}
      ></Box>
    </Flex>
  </header>
);
