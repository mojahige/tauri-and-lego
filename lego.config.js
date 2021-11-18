module.exports = {
  sourceDir: "./bricks",
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