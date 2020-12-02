const React = require("react");
const { Helmet } = require("react-helmet");

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.base.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  const order = [
    "title",
    "base",
    "meta",
    "link",
    "noscript",
    "script",
    "style",
  ];

  const sortedHeadComponents = headComponents
    .slice(0)
    .flat()
    .sort((x, y) => {
      return order.indexOf(x.type) - order.indexOf(y.type);
    });

  replaceHeadComponents(sortedHeadComponents);
};
