module.exports = {
  importPath: "http://localhost:3000/assets/javascripts/lego.min.js",
  sourceDir: "./bricks",
  targetDir: "./public/assets/javascripts/bricks",
  preStyle: `
  :host {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }`,
};
