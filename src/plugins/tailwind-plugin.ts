import type { PostCssOptions } from "@docusaurus/types";

module.exports = function tailwindPlugin() {
    return {
        name: "tailwindcss-plugin",
        configurePostCss(postcssOptions: PostCssOptions) {
            postcssOptions.plugins.push(require("@tailwindcss/postcss"));
            return postcssOptions;
        }
    };
};
