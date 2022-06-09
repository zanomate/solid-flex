import withSolid from "rollup-preset-solid"

export default withSolid()

// import babel from '@rollup/plugin-babel';
// import nodeResolve from "@rollup/plugin-node-resolve";
// import dts from 'rollup-plugin-dts'
//
// import pkg from './package.json'
//
// export default [
//   {
//     input: 'src/index.ts',
//     output: [{
//       file: 'dist//solid-flex.cjs',
//       format: 'cjs'
//     }, {
//       file: 'dist//solid-flex.js',
//       format: 'es'
//     }],
//     external: ['solid-js'],
//     plugins: [
//       nodeResolve({
//         extensions: [".js", ".ts"]
//       }),
//       babel({
//         extensions: ['.js', '.ts'],
//         babelHelpers: "bundled",
//         presets: ["@babel/preset-typescript"],
//         exclude: 'node_modules/**'
//       })
//     ]
//   },
//   {
//     input: 'src/index.ts',
//     output: [{ file: pkg.types, format: 'es' }],
//     plugins: [dts()],
//   },
// ]
