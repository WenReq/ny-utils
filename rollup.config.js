/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-12 22:15:38
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 22:58:19
 * @FilePath: /ny-utils/rollup.config.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
const input = ["src/index.js"];

export default [
  {
    // UMD
    input,
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // 指定哪些文件夹时不进行babel编译的
      }),
      terser(),
    ],
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: "umd",
      name: "nyUtils", // this is the name of the global object
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
  },
  // ESM and CJS
  {
    input,
    plugins: [nodeResolve()],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];
