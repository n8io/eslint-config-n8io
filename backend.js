const backend = {
  "extends": [
    "n8io/base"
  ],
  "env": {"node": true},
  "rules": {
    // Node.js and CommonJS - These rules relate to code running in Node.js, or in browsers with CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs
    "callback-return":        0, // require return statements after callbacks                              http://eslint.org/docs/rules/callback-return
    "global-require":         "error", // require require() calls to be placed at top-level module scope         http://eslint.org/docs/rules/global-require
    "handle-callback-err":    "error", // require error handling in callbacks                                    http://eslint.org/docs/rules/handle-callback-err
    "no-mixed-requires":      ["error", {"grouping": true, "allowCall": true}], // disallow require calls to be mixed with regular variable declarations  http://eslint.org/docs/rules/no-mixed-requires
    "no-new-require":         "error", // disallow new operators with calls to require                           http://eslint.org/docs/rules/no-new-require
    "no-path-concat":         "error", // disallow string concatenation with __dirname and __filename            http://eslint.org/docs/rules/no-path-concat
    "no-process-env":         "error", // disallow the use of process.env                                        http://eslint.org/docs/rules/no-process-env
    "no-process-exit":        "error", // disallow the use of process.exit()                                     http://eslint.org/docs/rules/no-process-exit
    "no-restricted-modules":  0, // disallow specified modules when loaded by require                      http://eslint.org/docs/rules/no-restricted-modules
    "no-sync":                0, // disallow synchronous methods                                           http://eslint.org/docs/rules/no-sync
  }
};

module.exports = backend;
