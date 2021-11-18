module.exports = {
  sourceDir: "./src",
  targetDir: "./dist/assets/bricks",
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