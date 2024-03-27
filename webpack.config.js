import path from "path";

const config = {
  mode: "production",
  entry: "./app.js",
  output: {
    path: "/dist",
    publicPath: "/",
    filename: "final.js",
  },
  target: "node",
};

export default config;
