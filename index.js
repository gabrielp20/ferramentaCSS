const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cssProperties = [];
const cssPropertiesList = ["align-content", "align-items", "align-self", "all", "justify-content", "justify-items", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border: solid", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "counter-increment", "counter-reset", "counter-set", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings"
  , "font-kerning", "font-language-override", "font-optical-sizing", "font-palette", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-emoji", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-rotate", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-anchor", "overflow-block", "overflow-clip-margin", "overflow-inline", "overflow-wrap", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-block", "overscroll-behavior-inline", "overscroll-behavior-x", "overscroll-behavior-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "place-content", "place-items", "place-self", "scroll-behavior", "scroll-margin", "scroll-margin-block"
  , "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "Experimentalscroll-timeline", "Experimentalscroll-timeline-axis", "Experimentalscroll-timeline-name", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "white-space", "widows", "width", "will-change", "word-spacing", "writing-mode", "row-gap", "scale", "rotate", "resize", "quotes", "position", "pointer-events", "perspective", "perspective-origin", "paint-order", "isolation", "caret-color", "caption-side", "aspect-ratio", "tab-size", "z-index", "forced-color-adjust", "word-wrap", "word-break", "hyphens", "letter-spacing", "word-spacing", "white-space", "line-height", "cursor", "direction", "display", "empty-cells", "filter", "image-orientation", "image-rendering", "@media", "@keyframes", "@import", "@font-face", "@charset", "text-align", "text-align-last", "text-autospace", "text-color", "text-combine-upright", "text-decoration", "text-decoration-line", "text-decoration-color", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-indent: <percentage>", "text-indent: <length>", "text-indent: inherit", "text-justify", "text-kashida-space", "text-orientation", "text-overflow", "text-shadow", "text-size-adjust", "text-rendering", "text-transform", "text-underline-offset", "text-underline-position"];

const isCSSProperty = (property) => {
  return cssPropertiesList.includes(property);
};

const askForProperty = () => {
  rl.question("Digite uma propriedade CSS ou SAIR para encerrar: ", (property) => {
    if (property.toLowerCase() === "sair") {
      rl.close();
      return;
    }

    if (!isCSSProperty(property)) {
      console.log(chalk.red("A propriedade digitada não é uma propriedade CSS. Por favor, insira somente propriedades CSS."));
      askForProperty();
      return;
    }

    if (cssProperties.includes(property)) {
      console.log(chalk.yellow(`A propriedade CSS "${property}" já foi inserida.`));
    } else {
      cssProperties.push(property);
    }
    askForProperty();

  });
};

askForProperty();

rl.on("close", () => {
  cssProperties.sort();

  console.log(chalk.green("Propriedades CSS ordenadas de A-Z:"));
  for (let i = 0; i < cssProperties.length; i++) {
    console.log(chalk.cyan(cssProperties[i]));
  }
});

rl.on("error", (err) => {
  console.error(chalk.red(`Error: ${err.message}`));
});