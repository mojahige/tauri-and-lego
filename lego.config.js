module.exports = {
  sourceDir: "./bricks",
  targetDir: "./public/assets/bricks",
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