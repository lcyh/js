const { uniq, flow } = require("lodash");

const pkg = {
  dependencies: {
    "@babel/cli": "^7.16.0",
    "@babel/core": "^7.16.5",
    "@babel/plugin-transform-modules-commonjs": "^7.16.5",
    "@babel/plugin-transform-runtime": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-react": "^7.16.5",
    "@babel/preset-typescript": "^7.16.5",
    "@typescript-eslint/eslint-plugin": "^5.8.0",
    "@typescript-eslint/parser": "^5.8.0",
    eslint: "^8.5.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.28.0",
  },
};
function extractExternalDeps(pkg) {
  return [
    ...Object.keys(pkg?.devDependencies || {}),
    ...Object.keys(pkg?.peerDependencies || {}),
  ];
}

const DEFAULT_EXTRA_EXTERNAL = [/@babel\/runtime/];
let externalDeps = flow(
  uniq,
  toRegex
)([...DEFAULT_EXTRA_EXTERNAL, ...extractExternalDeps(pkg)]);

function toRegex(deps = []) {
  return deps.map((dep) => (typeof dep === "string" ? new RegExp(dep) : dep));
}

console.log("externalDeps", externalDeps);
// console.log("===", toRegex(["babel/cli"]));

function flowFn(arrFuns = []) {
  return (...args) => {
    if (arrFuns.length === 1) {
      return arrFuns[0](...args);
    }
    return arrFuns.reduce((pre, cur) => {
      return cur(pre(...args));
    });
  };
}
function add(num1, num2) {
  return num1 + num2;
}
function square(n) {
  return n * n;
}
let fn = flowFn([add, square]);
console.log("fn", fn(1, 2));
