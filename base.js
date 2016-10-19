const defaults = require('./defaults');
const baseRules = {
  // Possible Errors - These rules relate to possible syntax or logic errors in JavaScript code http://eslint.org/docs/rules/#possible-errors
  "no-unsafe-negation":           "error", // disallow negating the left operand of relational operators (fixable)           http://eslint.org/docs/rules/no-unsafe-negation

  // Best Practices - These rules relate to better ways of doing things to help you avoid problems http://eslint.org/docs/rules/#best-practices
  "consistent-return":             "error", // require return statements to either always or never specify values              http://eslint.org/docs/rules/consistent-return
  "curly":                         "error", // enforce consistent brace style for all control statements                       http://eslint.org/docs/rules/curly
  "default-case":                  "error", // require default cases in switch statements                                      http://eslint.org/docs/rules/default-ca
  "dot-notation":                  ["error", {"allowPattern": "^[a-z]+([_][a-z0-9]+)+$"}], // enforce dot notation whenever possible (fixable)                                http://eslint.org/docs/rules/dot-notation
  "eqeqeq":                        "error", // require the use of === and !==                                                  http://eslint.org/docs/rules/eqeqeq
  "no-alert":                      "error", // disallow the use of alert, confirm, and prompt                                  http://eslint.org/docs/rules/no-alert
  "no-caller":                     "error", // disallow the use of arguments.caller or arguments.callee                        http://eslint.org/docs/rules/no-caller
  "no-eq-null":                    "error", // disallow null comparisons without type-checking operators                       http://eslint.org/docs/rules/no-eq-null
  "no-eval":                       "error", // disallow the use of eval()                                                      http://eslint.org/docs/rules/no-eval
  "no-extend-native":              "error", // disallow extending native types                                                 http://eslint.org/docs/rules/no-extend-native
  "no-extra-bind":                 "error", // disallow unnecessary calls to .bind()                                           http://eslint.org/docs/rules/no-extra-bind
  "no-extra-label":                "error", // disallow unnecessary labels                                                     http://eslint.org/docs/rules/no-extra-label
  "no-fallthrough":                "off", // disallow fallthrough of case statements                                         http://eslint.org/docs/rules/no-fallthrough
  "no-floating-decimal":           "error", // disallow leading or trailing decimal points in numeric literals (fixable)       http://eslint.org/docs/rules/no-floating-decimal
  "no-global-assign":              "error", // disallow assignments to native objects or read-only global variables            http://eslint.org/docs/rules/no-global-assign
  "no-implicit-globals":           "error", // disallow variable and function declarations in the global scope                 http://eslint.org/docs/rules/no-implicit-globals
  "no-implied-eval":               "error", // disallow the use of eval()-like methods                                         http://eslint.org/docs/rules/no-implied-eval
  "no-iterator":                   "error", // disallow the use of the __iterator__ property                                   http://eslint.org/docs/rules/no-iterator
  "no-labels":                     "error", // disallow labeled statements                                                     http://eslint.org/docs/rules/no-labels
  "no-lone-blocks":                "error", // disallow unnecessary nested blocks                                              http://eslint.org/docs/rules/no-lone-blocks
  "no-loop-func":                  "error", // disallow function declarations and expressions inside loop statements           http://eslint.org/docs/rules/no-loop-func
  "no-magic-numbers":              ["error", {"ignore":[1, -1], "ignoreArrayIndexes": true}], // disallow magic numbers                                                          http://eslint.org/docs/rules/no-magic-numbers
  "no-multi-spaces":               "error", // disallow multiple spaces (fixable)                                              http://eslint.org/docs/rules/no-multi-spaces
  "no-multi-str":                  "error", // disallow multiline strings                                                      http://eslint.org/docs/rules/no-multi-str
  "no-new-func":                   "error", // disallow new operators with the Function object                                 http://eslint.org/docs/rules/no-new-func
  "no-new-wrappers":               "error", // disallow new operators with the String, Number, and Boolean objects             http://eslint.org/docs/rules/no-new-wrappers
  "no-new":                        "error", // disallow new operators outside of assignments or comparisons                    http://eslint.org/docs/rules/no-new
  "no-param-reassign":             "error", // disallow reassigning function parameters                                        http://eslint.org/docs/rules/no-param-reassign
  "no-proto":                      "error", // disallow the use of the __proto__ property                                      http://eslint.org/docs/rules/no-proto
  "no-return-assign":              "error", // disallow assignment operators in return statements                              http://eslint.org/docs/rules/no-return-assign
  "no-self-compare":               "error", // disallow comparisons where both sides are exactly the same                      http://eslint.org/docs/rules/no-self-compare
  "no-throw-literal":              "error", // disallow throwing literals as exceptions                                        http://eslint.org/docs/rules/no-throw-literal\
  "no-unused-expressions":         ["error", {"allowShortCircuit": true, "allowTernary": true}], // disallow unused expressions                                                     http://eslint.org/docs/rules/no-unused-expressions
  "no-useless-call":               "error", // disallow unnecessary calls to .call() and .apply()                              http://eslint.org/docs/rules/no-useless-call
  "no-useless-concat":             "error", // disallow unnecessary concatenation of literals or template literals             http://eslint.org/docs/rules/no-useless-concat
  "no-useless-escape":             "error", // disallow unnecessary escape characters                                          http://eslint.org/docs/rules/no-useless-escape
  "no-void":                       "error", // disallow void operators                                                         http://eslint.org/docs/rules/no-void
  "no-with":                       "error", // disallow with statements                                                        http://eslint.org/docs/rules/no-with
  "radix":                         "error", // enforce the consistent use of the radix argument when using parseInt()          http://eslint.org/docs/rules/radix
  "vars-on-top":                   "warn", // require var declarations be placed at the top of their containing scope         http://eslint.org/docs/rules/vars-on-top

  // Variables - These rules relate to variable declarations http://eslint.org/docs/rules/#variables
  "no-catch-shadow":             "error", // disallow catch clause parameters from shadowing variables in the outer scope         http://eslint.org/docs/rules/no-catch-shadow
  "no-label-var":                "error", // disallow labels that share a name with a variable                                    http://eslint.org/docs/rules/no-label-var\
  "no-shadow":                   "error", // disallow variable declarations from shadowing variables declared in the outer scope  http://eslint.org/docs/rules/no-shadow
  "no-undef-init":               "error", // disallow initializing variables to undefined (fixable)                               http://eslint.org/docs/rules/no-undef-init
  "no-undefined":                "error", // disallow the use of undefined as an identifier                                       http://eslint.org/docs/rules/no-undefined
  "no-use-before-define":        ["error", {functions: false}], // disallow the use of variables before they are defined                                http://eslint.org/docs/rules/no-use-before-define

  // Stylistic Issues - These rules relate to style guidelines, and are therefore quite subjective http://eslint.org/docs/rules/#stylistic-issues
  "array-bracket-spacing":          "error", // enforce consistent spacing inside array brackets (fixable)                                http://eslint.org/docs/rules/array-bracket-spacing
  "brace-style":                    ["error", "stroustrup"], // enforce consistent brace style for blocks                                                 http://eslint.org/docs/rules/brace-style
  "camelcase":                      "error", // enforce camelcase naming convention                                                       http://eslint.org/docs/rules/camelcase
  "comma-spacing":                  ["error", {before: false, after: true}], // enforce consistent spacing before and after commas (fixable)                              http://eslint.org/docs/rules/comma-spacing
  "comma-style":                    ["error", "last"], // enforce consistent comma style (fixable)                                                  http://eslint.org/docs/rules/comma-style
  "computed-property-spacing":      ["error", "never"], // enforce consistent spacing inside computed property brackets (fixable)                    http://eslint.org/docs/rules/computed-property-spacing
  "eol-last":                       "error", // require or disallow newline at the end of files (fixable)                                 http://eslint.org/docs/rules/eol-last
  "func-names":                     ["error", "never"], // require or disallow named function expressions                                            http://eslint.org/docs/rules/func-names
  "func-style":                     ["error", "declaration", {"allowArrowFunctions": true}], // enforce the consistent use of either function declarations or expressions                 http://eslint.org/docs/rules/func-style
  "id-blacklist":                   ["error", "data", "err", "e", "cb", "callback"], // disallow specified identifiers                                                            http://eslint.org/docs/rules/id-blacklist
  "id-length":                      ["error", {"min": 2, "exceptions": ["t"]}], // enforce minimum and maximum identifier lengths                                            http://eslint.org/docs/rules/id-length
  "indent":                         ["error", 2], // enforce consistent indentation (fixable)                                                  http://eslint.org/docs/rules/indent
  "key-spacing":                    "error", // enforce consistent spacing between keys and values in object literal properties (fixable) http://eslint.org/docs/rules/key-spacing
  "keyword-spacing":                "error", // enforce consistent spacing before and after keywords (fixable)                            http://eslint.org/docs/rules/keyword-spacing
  "linebreak-style":                ["error", "unix"], // enforce consistent linebreak style (fixable)                                              http://eslint.org/docs/rules/linebreak-style
  "max-len":                        ["error", 150], // enforce a maximum line length                                                             http://eslint.org/docs/ru
  "max-nested-callbacks":           ["error", 4], // enforce a maximum depth that callbacks can be nested                                      http://eslint.org/docs/rules/max-nested-callbacks
  "max-params":                     ["warn", 5], // enforce a maximum number of parameters in function definitions                            http://eslint.org/docs/rules/max-params
  "new-cap":                        "error", // require constructor names to begin with a capital letter                                  http://eslint.org/docs/rules/new-cap
  "new-parens":                     "error", // require parentheses when invoking a constructor with no arguments (fixable)               http://eslint.org/docs/rules/new-parens
  "newline-after-var":              ["error", "always"], // require or disallow an empty line after variable declarations                             http://eslint.org/docs/rules/newline-after-var
  "newline-before-return":          "error", // require an empty line before return statements (fixable)                                  http://eslint.org/docs/rules/newline-before-return
  "newline-per-chained-call":       ["error", {"ignoreChainWithDepth": 2}], // require a newline after each call in a method chain                                       http://eslint.org/docs/rules/newline-per-chained-call
  "no-bitwise":                     "error", // disallow bitwise operators                                                                http://eslint.org/docs/rules/no-bitwise
  "no-lonely-if":                   "error", // disallow if statements as the only statement in else blocks                               http://eslint.org/docs/rules/no-lonely-if
  "no-mixed-operators":             "error", // disallow mixed binary operators                                                           http://eslint.org/docs/rules/no-mixed-operators
  "no-multiple-empty-lines":        "error", // disallow multiple empty lines (fixable)                                                   http://eslint.org/docs/rules/no-multiple-empty-lines
  "no-negated-condition":           "error", // disallow negated conditions                                                               http://eslint.org/docs/rules/no-negated-condition
  "no-nested-ternary":              "error", // disallow nested ternary expressions                                                       http://eslint.org/docs/rules/no-nested-ternary
  "no-new-object":                  "error", // disallow Object constructors                                                              http://eslint.org/docs/rules/no-new-object
  "no-tabs":                        "error", // disallow tabs in file                                                                     http://eslint.org/docs/rules/no-t
  "no-trailing-spaces":             "error", // disallow trailing whitespace at the end of lines (fixable)                                http://eslint.org/docs/rules/no-trailing-spaces
  "no-underscore-dangle":           "error", // disallow dangling underscores in identifiers                                              http://eslint.org/docs/rules/no-underscore-dangle
  "no-unneeded-ternary":            "error", // disallow ternary operators when simpler alternatives exist                                http://eslint.org/docs/rules/no-unneeded-ternary
  "no-whitespace-before-property":  "error", // disallow whitespace before properties (fixable)                                           http://eslint.org/docs/rules/no-whitespace-before-property
  "object-curly-newline":           ["error", {"multiline": true}], // enforce consistent line breaks inside braces (fixable)                                    http://eslint.org/docs/rules/object-curly-newline
  "object-curly-spacing":           ["error", "never"], // enforce consistent spacing inside braces (fixable)                                        http://eslint.org/docs/rules/object-curly-spacing
  "object-property-newline":        "error", // enforce placing object properties on separate lines                                       http://eslint.org/docs/rules/object-property-newlin
  "one-var":                        ["error", "never"], // enforce variables to be declared either together or separately in functions               http://eslint.org/docs/rules/one-var
  "operator-linebreak":             ["error", "before"], // enforce consistent linebreak style for operators                                          http://eslint.org/docs/rules/operator-linebreak
  "padded-blocks":                  ["error", "never"], // require or disallow padding within blocks (fixable)                                       http://eslint.org/docs/rules/padded-blocks
  "quote-props":                    ["error", "as-needed"], // require quotes around object literal property names (fixable)                             http://eslint.org/docs/rules/quote-props
  "quotes":                         ["error", "single"], // enforce the consistent use of either backticks, double, or single quotes (fixable)        http://eslint.org/docs/rules/quotes
  "semi-spacing":                   "error", // enforce consistent spacing before and after semicolons (fixable)                          http://eslint.org/docs/rules/semi-spacing
  "semi":                           "error", // require or disallow semicolons instead of ASI (fixable)                                   http://eslint.org/docs/rules/semi
  "space-before-blocks":            "error", // enforce consistent spacing before blocks (fixable)                                        http://eslint.org/docs/rules/space-before-blocks
  "space-before-function-paren":    ["error", "never"], // enforce consistent spacing before function definition opening parenthesis (fixable)       http://eslint.org/docs/rules/space-before-function-paren
  "space-in-parens":                ["error", "never"], // enforce consistent spacing inside parentheses (fixable)                                   http://eslint.org/docs/rules/space-in-parens
  "space-infix-ops":                "error", // require spacing around infix operators (fixable)                                          http://eslint.org/docs/rules/space-infix-ops
  "space-unary-ops":                "error", // enforce consistent spacing before or after unary operators (fixable)                      http://eslint.org/docs/rules/space-unary-ops
  "spaced-comment":                 ["error", "always"], // enforce consistent spacing after the // or /* in a comment (fixable)                      http://eslint.org/docs/rules/spaced-comment
  "unicode-bom":                    ["error", "never"], // require or disallow Unicode byte order mark (BOM) (fixable)                               http://eslint.org/docs/rules/unicode-bom

  // ECMAScript 6 - These rules relate to ES6, also known as ES2015 http://eslint.org/docs/rules/#ecmascript-6
  "arrow-body-style":        ["error", "as-needed"], // require braces around arrow function bodies                                                 http://eslint.org/docs/rules/arrow-body-style
  "arrow-parens":            ["error", "as-needed"], // require parentheses around arrow function arguments (fixable)                               http://eslint.org/docs/rules/arrow-parens
  "arrow-spacing":           "error", // enforce consistent spacing before and after the arrow in arrow functions (fixable)          http://eslint.org/docs/rules/arrow-spacing
  "generator-star-spacing":  ["error", "after"], // enforce consistent spacing around * operators in generator functions (fixable)              http://eslint.org/docs/rules/generator-star-spacing
  "no-confusing-arrow":      ["error", {allowParens: true}], // disallow arrow functions where they could be confused with comparisons                      http://eslint.org/docs/rules/no-confusing-arrow
  "no-duplicate-imports":    ["error", {"includeExports": true}], // disallow duplicate module imports                                                           http://eslint.org/docs/rules/no-duplicate-imports
  "no-useless-computed-key": "error", // disallow unnecessary computed property keys in object literals (fixable)                    http://eslint.org/docs/rules/no-useless-computed-key
  "no-useless-constructor":  "error", // disallow unnecessary constructors                                                           http://eslint.org/docs/rules/no-useless-constructor
  "no-useless-rename":       "error", // disallow renaming import, export, and destructured assignments to the same name (fixable)   http://eslint.org/docs/rules/no-useless-rename
  "no-var":                  "error", // require let or const instead of var (fixable)                                               http://eslint.org/docs/rules/no-var
  "object-shorthand":        ["error", "consistent-as-needed"], // require or disallow method and property shorthand syntax for object literals (fixable)      http://eslint.org/docs/rules/object-shorthand
  "prefer-const":            "error", // require const declarations for variables that are never reassigned after declared (fixable) http://eslint.org/docs/rules/prefer-const
  "prefer-rest-params":      "error", // require rest parameters instead of arguments                                                http://eslint.org/docs/rules/prefer-rest-params
  "prefer-spread":           "error", // require spread operators instead of .apply()                                                http://eslint.org/docs/rules/prefer-spread
  "prefer-template":         "error", // require template literals instead of string concatenation (fixable)                         http://eslint.org/docs/rules/prefer-template
  "symbol-description":      "error", // require symbol descriptions                                                                 http://eslint.org/docs/rules/symbol-description
  "template-curly-spacing":  "error", // require or disallow spacing around embedded expressions of template strings (fixable)       http://eslint.org/docs/rules/template-curly-spacing
  "yield-star-spacing":      ["error", "after"], // require or disallow spacing around the * in yield* expressions (fixable)                    http://eslint.org/docs/rules/yield-star-spacing

  /* Deprecated rules
  "no-native-reassign": ["no-global-assign"],
  "no-negated-in-lhs":  ["no-unsafe-negation"],
  "no-spaced-func":     ["func-call-spacing"],
  */

  /* Removed rules
  "generator-star":                    ["generator-star-spacing"],
  "global-strict":                     ["strict"],
  "no-arrow-condition":                ["no-confusing-arrow", "no-constant-condition"],
  "no-comma-dangle":                   ["comma-dangle"],
  "no-empty-class":                    ["no-empty-character-class"],
  "no-empty-label":                    ["no-labels"],
  "no-extra-strict":                   ["strict"],
  "no-reserved-keys":                  ["quote-props"],
  "no-space-before-semi":              ["semi-spacing"],
  "no-wrap-func":                      ["no-extra-parens"],
  "space-after-function-name":         ["space-before-function-paren"],
  "space-after-keywords":              ["keyword-spacing"],
  "space-before-function-parentheses": ["space-before-function-paren"],
  "space-before-keywords":             ["keyword-spacing"],
  "space-in-brackets":                 ["object-curly-spacing", "array-bracket-spacing"],
  "space-return-throw-case":           ["keyword-spacing"],
  "space-unary-word-ops":              ["space-unary-ops"],
  "spaced-line-comment":               ["spaced-comment"],
  */
};

const consolidatedConfig = Object.assign({}, defaults, {
  "parser": "babel-eslint",
  "parserOptions": {"sourceType": "module"},
  "ecmaFeatures": {
    "defaultParams": true,
    "templateStrings": true,
    "experimentalObjectRestSpread": true
  },
  "env": {"es6": true},
  "rules": baseRules
});

module.exports = consolidatedConfig;
