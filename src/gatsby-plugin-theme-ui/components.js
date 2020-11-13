// add custom MDX components here
import Prism from "@theme-ui/prism";

export default {
  pre: (props) => props.children,
  code: Prism,
};
