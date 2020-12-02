import SEO from "../../components/seo.js";

<SEO></SEO>;
function loadNodeContent(brainNote) {
  return Promise.resolve(brainNote.rawContent);
}

exports.loadNodeContent = loadNodeContent;
