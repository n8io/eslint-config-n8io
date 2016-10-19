module.exports = {
  // More info here: http://eslint.org/docs/rules
  // Last pulled: 10/14/2016 2:57:48 PM
  // Using script from here: https://gist.github.com/n8io/bb92a39fecca7ac762b5c805e5fa3b04

  "rules": {
    // Possible Errors - These rules relate to possible syntax or logic errors in JavaScript code http://eslint.org/docs/rules/#possible-errors
    "no-cond-assign":               2, // disallow assignment operators in conditional expressions                       http://eslint.org/docs/rules/no-cond-assign
    "no-console":                   2, // disallow the use of console                                                    http://eslint.org/docs/rules/no-console
    "no-constant-condition":        2, // disallow constant expressions in conditions                                    http://eslint.org/docs/rules/no-constant-condition
    "no-control-regex":             2, // disallow control characters in regular expressions                             http://eslint.org/docs/rules/no-control-regex
    "no-debugger":                  2, // disallow the use of debugger                                                   http://eslint.org/docs/rules/no-debugger
    "no-dupe-args":                 2, // disallow duplicate arguments in function definitions                           http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-keys":                 2, // disallow duplicate keys in object literals                                     http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case":            2, // disallow duplicate case labels                                                 http://eslint.org/docs/rules/no-duplicate-case
    "no-empty-character-class":     2, // disallow empty character classes in regular expressions                        http://eslint.org/docs/rules/no-empty-character-class
    "no-empty":                     2, // disallow empty block statements                                                http://eslint.org/docs/rules/no-empty
    "no-ex-assign":                 2, // disallow reassigning exceptions in catch clauses                               http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast":        2, // disallow unnecessary boolean casts                                             http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-parens":              0, // disallow unnecessary parentheses (fixable)                                     http://eslint.org/docs/rules/no-extra-parens
    "no-extra-semi":                2, // disallow unnecessary semicolons (fixable)                                      http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign":               2, // disallow reassigning function declarations                                     http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations":        2, // disallow variable or function declarations in nested blocks                    http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp":            2, // disallow invalid regular expression strings in RegExp constructors             http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace":      2, // disallow irregular whitespace outside of strings and comments                  http://eslint.org/docs/rules/no-irregular-whitespace
    "no-obj-calls":                 2, // disallow calling global object properties as functions                         http://eslint.org/docs/rules/no-obj-calls
    "no-prototype-builtins":        0, // disallow calling some Object.prototype methods directly on objects             http://eslint.org/docs/rules/no-prototype-builtins
    "no-regex-spaces":              2, // disallow multiple spaces in regular expressions (fixable)                      http://eslint.org/docs/rules/no-regex-spaces
    "no-sparse-arrays":             2, // disallow sparse arrays                                                         http://eslint.org/docs/rules/no-sparse-arrays
    "no-template-curly-in-string":  0, // disallow template literal placeholder syntax in regular strings                http://eslint.org/docs/rules/no-template-curly-in-string
    "no-unexpected-multiline":      2, // disallow confusing multiline expressions                                       http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unreachable":               2, // disallow unreachable code after return, throw, continue, and break statements  http://eslint.org/docs/rules/no-unreachable
    "no-unsafe-finally":            2, // disallow control flow statements in finally blocks                             http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-negation":           0, // disallow negating the left operand of relational operators (fixable)           http://eslint.org/docs/rules/no-unsafe-negation
    "use-isnan":                    2, // require calls to isNaN() when checking for NaN                                 http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc":                  0, // enforce valid JSDoc comments                                                   http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof":                 2, // enforce comparing typeof expressions against valid strings                     http://eslint.org/docs/rules/valid-typeof

    // Best Practices - These rules relate to better ways of doing things to help you avoid problems http://eslint.org/docs/rules/#best-practices
    "accessor-pairs":                0, // enforce getter and setter pairs in objects                                      http://eslint.org/docs/rules/accessor-pairs
    "array-callback-return":         0, // enforce return statements in callbacks of array methods                         http://eslint.org/docs/rules/array-callback-return
    "block-scoped-var":              0, // enforce the use of variables within the scope they are defined                  http://eslint.org/docs/rules/block-scoped-var
    "class-methods-use-this":        0, // enforce that class methods utilize this                                         http://eslint.org/docs/rules/class-methods-use-this
    "complexity":                    0, // enforce a maximum cyclomatic complexity allowed in a program                    http://eslint.org/docs/rules/complexity
    "consistent-return":             0, // require return statements to either always or never specify values              http://eslint.org/docs/rules/consistent-return
    "curly":                         0, // enforce consistent brace style for all control statements                       http://eslint.org/docs/rules/curly
    "default-case":                  0, // require default cases in switch statements                                      http://eslint.org/docs/rules/default-case
    "dot-location":                  0, // enforce consistent newlines before and after dots (fixable)                     http://eslint.org/docs/rules/dot-location
    "dot-notation":                  0, // enforce dot notation whenever possible (fixable)                                http://eslint.org/docs/rules/dot-notation
    "eqeqeq":                        0, // require the use of === and !==                                                  http://eslint.org/docs/rules/eqeqeq
    "guard-for-in":                  0, // require for-in loops to include an if statement                                 http://eslint.org/docs/rules/guard-for-in
    "no-alert":                      0, // disallow the use of alert, confirm, and prompt                                  http://eslint.org/docs/rules/no-alert
    "no-caller":                     0, // disallow the use of arguments.caller or arguments.callee                        http://eslint.org/docs/rules/no-caller
    "no-case-declarations":          2, // disallow lexical declarations in case clauses                                   http://eslint.org/docs/rules/no-case-declarations
    "no-div-regex":                  0, // disallow division operators explicitly at the beginning of regular expressions  http://eslint.org/docs/rules/no-div-regex
    "no-else-return":                0, // disallow else blocks after return statements in if statements                   http://eslint.org/docs/rules/no-else-return
    "no-empty-function":             0, // disallow empty functions                                                        http://eslint.org/docs/rules/no-empty-function
    "no-empty-pattern":              2, // disallow empty destructuring patterns                                           http://eslint.org/docs/rules/no-empty-pattern
    "no-eq-null":                    0, // disallow null comparisons without type-checking operators                       http://eslint.org/docs/rules/no-eq-null
    "no-eval":                       0, // disallow the use of eval()                                                      http://eslint.org/docs/rules/no-eval
    "no-extend-native":              0, // disallow extending native types                                                 http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind":                 0, // disallow unnecessary calls to .bind()                                           http://eslint.org/docs/rules/no-extra-bind
    "no-extra-label":                0, // disallow unnecessary labels                                                     http://eslint.org/docs/rules/no-extra-label
    "no-fallthrough":                2, // disallow fallthrough of case statements                                         http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal":           0, // disallow leading or trailing decimal points in numeric literals (fixable)       http://eslint.org/docs/rules/no-floating-decimal
    "no-global-assign":              0, // disallow assignments to native objects or read-only global variables            http://eslint.org/docs/rules/no-global-assign
    "no-implicit-coercion":          0, // disallow shorthand type conversions (fixable)                                   http://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-globals":           0, // disallow variable and function declarations in the global scope                 http://eslint.org/docs/rules/no-implicit-globals
    "no-implied-eval":               0, // disallow the use of eval()-like methods                                         http://eslint.org/docs/rules/no-implied-eval
    "no-invalid-this":               0, // disallow this keywords outside of classes or class-like objects                 http://eslint.org/docs/rules/no-invalid-this
    "no-iterator":                   0, // disallow the use of the __iterator__ property                                   http://eslint.org/docs/rules/no-iterator
    "no-labels":                     0, // disallow labeled statements                                                     http://eslint.org/docs/rules/no-labels
    "no-lone-blocks":                0, // disallow unnecessary nested blocks                                              http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func":                  0, // disallow function declarations and expressions inside loop statements           http://eslint.org/docs/rules/no-loop-func
    "no-magic-numbers":              0, // disallow magic numbers                                                          http://eslint.org/docs/rules/no-magic-numbers
    "no-multi-spaces":               0, // disallow multiple spaces (fixable)                                              http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str":                  0, // disallow multiline strings                                                      http://eslint.org/docs/rules/no-multi-str
    "no-new-func":                   0, // disallow new operators with the Function object                                 http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers":               0, // disallow new operators with the String, Number, and Boolean objects             http://eslint.org/docs/rules/no-new-wrappers
    "no-new":                        0, // disallow new operators outside of assignments or comparisons                    http://eslint.org/docs/rules/no-new
    "no-octal-escape":               0, // disallow octal escape sequences in string literals                              http://eslint.org/docs/rules/no-octal-escape
    "no-octal":                      2, // disallow octal literals                                                         http://eslint.org/docs/rules/no-octal
    "no-param-reassign":             0, // disallow reassigning function parameters                                        http://eslint.org/docs/rules/no-param-reassign
    "no-proto":                      0, // disallow the use of the __proto__ property                                      http://eslint.org/docs/rules/no-proto
    "no-redeclare":                  2, // disallow variable redeclaration                                                 http://eslint.org/docs/rules/no-redeclare
    "no-restricted-properties":      0, // disallow certain properties on certain objects                                  http://eslint.org/docs/rules/no-restricted-properties
    "no-return-assign":              0, // disallow assignment operators in return statements                              http://eslint.org/docs/rules/no-return-assign
    "no-script-url":                 0, // disallow javascript: urls                                                       http://eslint.org/docs/rules/no-script-url
    "no-self-assign":                2, // disallow assignments where both sides are exactly the same                      http://eslint.org/docs/rules/no-self-assign
    "no-self-compare":               0, // disallow comparisons where both sides are exactly the same                      http://eslint.org/docs/rules/no-self-compare
    "no-sequences":                  0, // disallow comma operators                                                        http://eslint.org/docs/rules/no-sequences
    "no-throw-literal":              0, // disallow throwing literals as exceptions                                        http://eslint.org/docs/rules/no-throw-literal
    "no-unmodified-loop-condition":  0, // disallow unmodified loop conditions                                             http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unused-expressions":         0, // disallow unused expressions                                                     http://eslint.org/docs/rules/no-unused-expressions
    "no-unused-labels":              2, // disallow unused labels                                                          http://eslint.org/docs/rules/no-unused-labels
    "no-useless-call":               0, // disallow unnecessary calls to .call() and .apply()                              http://eslint.org/docs/rules/no-useless-call
    "no-useless-concat":             0, // disallow unnecessary concatenation of literals or template literals             http://eslint.org/docs/rules/no-useless-concat
    "no-useless-escape":             0, // disallow unnecessary escape characters                                          http://eslint.org/docs/rules/no-useless-escape
    "no-void":                       0, // disallow void operators                                                         http://eslint.org/docs/rules/no-void
    "no-warning-comments":           0, // disallow specified warning terms in comments                                    http://eslint.org/docs/rules/no-warning-comments
    "no-with":                       0, // disallow with statements                                                        http://eslint.org/docs/rules/no-with
    "radix":                         0, // enforce the consistent use of the radix argument when using parseInt()          http://eslint.org/docs/rules/radix
    "vars-on-top":                   0, // require var declarations be placed at the top of their containing scope         http://eslint.org/docs/rules/vars-on-top
    "wrap-iife":                     0, // require parentheses around immediate function invocations (fixable)             http://eslint.org/docs/rules/wrap-iife
    "yoda":                          0, // require or disallow “Yoda” conditions (fixable)                                 http://eslint.org/docs/rules/yoda

    // Strict Mode - These rules relate to strict mode directives http://eslint.org/docs/rules/#strict-mode
    "strict":  0, // require or disallow strict mode directives (fixable) http://eslint.org/docs/rules/strict

    // Variables - These rules relate to variable declarations http://eslint.org/docs/rules/#variables
    "init-declarations":           0, // require or disallow initialization in variable declarations                          http://eslint.org/docs/rules/init-declarations
    "no-catch-shadow":             0, // disallow catch clause parameters from shadowing variables in the outer scope         http://eslint.org/docs/rules/no-catch-shadow
    "no-delete-var":               2, // disallow deleting variables                                                          http://eslint.org/docs/rules/no-delete-var
    "no-label-var":                0, // disallow labels that share a name with a variable                                    http://eslint.org/docs/rules/no-label-var
    "no-restricted-globals":       0, // disallow specified global variables                                                  http://eslint.org/docs/rules/no-restricted-globals
    "no-shadow-restricted-names":  0, // disallow identifiers from shadowing restricted names                                 http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow":                   0, // disallow variable declarations from shadowing variables declared in the outer scope  http://eslint.org/docs/rules/no-shadow
    "no-undef-init":               0, // disallow initializing variables to undefined (fixable)                               http://eslint.org/docs/rules/no-undef-init
    "no-undef":                    2, // disallow the use of undeclared variables unless mentioned in /*global */ comments    http://eslint.org/docs/rules/no-undef
    "no-undefined":                0, // disallow the use of undefined as an identifier                                       http://eslint.org/docs/rules/no-undefined
    "no-unused-vars":              2, // disallow unused variables                                                            http://eslint.org/docs/rules/no-unused-vars
    "no-use-before-define":        0, // disallow the use of variables before they are defined                                http://eslint.org/docs/rules/no-use-before-define

    // Node.js and CommonJS - These rules relate to code running in Node.js, or in browsers with CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs
    "callback-return":        0, // require return statements after callbacks                              http://eslint.org/docs/rules/callback-return
    "global-require":         0, // require require() calls to be placed at top-level module scope         http://eslint.org/docs/rules/global-require
    "handle-callback-err":    0, // require error handling in callbacks                                    http://eslint.org/docs/rules/handle-callback-err
    "no-mixed-requires":      0, // disallow require calls to be mixed with regular variable declarations  http://eslint.org/docs/rules/no-mixed-requires
    "no-new-require":         0, // disallow new operators with calls to require                           http://eslint.org/docs/rules/no-new-require
    "no-path-concat":         0, // disallow string concatenation with __dirname and __filename            http://eslint.org/docs/rules/no-path-concat
    "no-process-env":         0, // disallow the use of process.env                                        http://eslint.org/docs/rules/no-process-env
    "no-process-exit":        0, // disallow the use of process.exit()                                     http://eslint.org/docs/rules/no-process-exit
    "no-restricted-modules":  0, // disallow specified modules when loaded by require                      http://eslint.org/docs/rules/no-restricted-modules
    "no-sync":                0, // disallow synchronous methods                                           http://eslint.org/docs/rules/no-sync

    // Stylistic Issues - These rules relate to style guidelines, and are therefore quite subjective http://eslint.org/docs/rules/#stylistic-issues
    "array-bracket-spacing":          0, // enforce consistent spacing inside array brackets (fixable)                                http://eslint.org/docs/rules/array-bracket-spacing
    "block-spacing":                  0, // enforce consistent spacing inside single-line blocks (fixable)                            http://eslint.org/docs/rules/block-spacing
    "brace-style":                    0, // enforce consistent brace style for blocks                                                 http://eslint.org/docs/rules/brace-style
    "camelcase":                      0, // enforce camelcase naming convention                                                       http://eslint.org/docs/rules/camelcase
    "comma-dangle":                   0, // require or disallow trailing commas (fixable)                                             http://eslint.org/docs/rules/comma-dangle
    "comma-spacing":                  0, // enforce consistent spacing before and after commas (fixable)                              http://eslint.org/docs/rules/comma-spacing
    "comma-style":                    0, // enforce consistent comma style (fixable)                                                  http://eslint.org/docs/rules/comma-style
    "computed-property-spacing":      0, // enforce consistent spacing inside computed property brackets (fixable)                    http://eslint.org/docs/rules/computed-property-spacing
    "consistent-this":                0, // enforce consistent naming when capturing the current execution context                    http://eslint.org/docs/rules/consistent-this
    "eol-last":                       0, // require or disallow newline at the end of files (fixable)                                 http://eslint.org/docs/rules/eol-last
    "func-call-spacing":              0, // require or disallow spacing between function identifiers and their invocations (fixable)  http://eslint.org/docs/rules/func-call-spacing
    "func-names":                     0, // require or disallow named function expressions                                            http://eslint.org/docs/rules/func-names
    "func-style":                     0, // enforce the consistent use of either function declarations or expressions                 http://eslint.org/docs/rules/func-style
    "id-blacklist":                   0, // disallow specified identifiers                                                            http://eslint.org/docs/rules/id-blacklist
    "id-length":                      0, // enforce minimum and maximum identifier lengths                                            http://eslint.org/docs/rules/id-length
    "id-match":                       0, // require identifiers to match a specified regular expression                               http://eslint.org/docs/rules/id-match
    "indent":                         0, // enforce consistent indentation (fixable)                                                  http://eslint.org/docs/rules/indent
    "jsx-quotes":                     0, // enforce the consistent use of either double or single quotes in JSX attributes (fixable)  http://eslint.org/docs/rules/jsx-quotes
    "key-spacing":                    0, // enforce consistent spacing between keys and values in object literal properties (fixable) http://eslint.org/docs/rules/key-spacing
    "keyword-spacing":                0, // enforce consistent spacing before and after keywords (fixable)                            http://eslint.org/docs/rules/keyword-spacing
    "line-comment-position":          0, // enforce position of line comments                                                         http://eslint.org/docs/rules/line-comment-position
    "linebreak-style":                0, // enforce consistent linebreak style (fixable)                                              http://eslint.org/docs/rules/linebreak-style
    "lines-around-comment":           0, // require empty lines around comments (fixable)                                             http://eslint.org/docs/rules/lines-around-comment
    "lines-around-directive":         0, // require or disallow newlines around directives (fixable)                                  http://eslint.org/docs/rules/lines-around-directive
    "max-depth":                      0, // enforce a maximum depth that blocks can be nested                                         http://eslint.org/docs/rules/max-depth
    "max-len":                        0, // enforce a maximum line length                                                             http://eslint.org/docs/rules/max-len
    "max-lines":                      0, // enforce a maximum number of lines per file                                                http://eslint.org/docs/rules/max-lines
    "max-nested-callbacks":           0, // enforce a maximum depth that callbacks can be nested                                      http://eslint.org/docs/rules/max-nested-callbacks
    "max-params":                     0, // enforce a maximum number of parameters in function definitions                            http://eslint.org/docs/rules/max-params
    "max-statements-per-line":        0, // enforce a maximum number of statements allowed per line                                   http://eslint.org/docs/rules/max-statements-per-line
    "max-statements":                 0, // enforce a maximum number of statements allowed in function blocks                         http://eslint.org/docs/rules/max-statements
    "multiline-ternary":              0, // enforce newlines between operands of ternary expressions                                  http://eslint.org/docs/rules/multiline-ternary
    "new-cap":                        0, // require constructor names to begin with a capital letter                                  http://eslint.org/docs/rules/new-cap
    "new-parens":                     0, // require parentheses when invoking a constructor with no arguments (fixable)               http://eslint.org/docs/rules/new-parens
    "newline-after-var":              0, // require or disallow an empty line after variable declarations                             http://eslint.org/docs/rules/newline-after-var
    "newline-before-return":          0, // require an empty line before return statements (fixable)                                  http://eslint.org/docs/rules/newline-before-return
    "newline-per-chained-call":       0, // require a newline after each call in a method chain                                       http://eslint.org/docs/rules/newline-per-chained-call
    "no-array-constructor":           0, // disallow Array constructors                                                               http://eslint.org/docs/rules/no-array-constructor
    "no-bitwise":                     0, // disallow bitwise operators                                                                http://eslint.org/docs/rules/no-bitwise
    "no-continue":                    0, // disallow continue statements                                                              http://eslint.org/docs/rules/no-continue
    "no-inline-comments":             0, // disallow inline comments after code                                                       http://eslint.org/docs/rules/no-inline-comments
    "no-lonely-if":                   0, // disallow if statements as the only statement in else blocks                               http://eslint.org/docs/rules/no-lonely-if
    "no-mixed-operators":             0, // disallow mixed binary operators                                                           http://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-spaces-and-tabs":       2, // disallow mixed spaces and tabs for indentation                                            http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-multiple-empty-lines":        0, // disallow multiple empty lines (fixable)                                                   http://eslint.org/docs/rules/no-multiple-empty-lines
    "no-negated-condition":           0, // disallow negated conditions                                                               http://eslint.org/docs/rules/no-negated-condition
    "no-nested-ternary":              0, // disallow nested ternary expressions                                                       http://eslint.org/docs/rules/no-nested-ternary
    "no-new-object":                  0, // disallow Object constructors                                                              http://eslint.org/docs/rules/no-new-object
    "no-plusplus":                    0, // disallow the unary operators ++ and --                                                    http://eslint.org/docs/rules/no-plusplus
    "no-restricted-syntax":           0, // disallow specified syntax                                                                 http://eslint.org/docs/rules/no-restricted-syntax
    "no-tabs":                        0, // disallow tabs in file                                                                     http://eslint.org/docs/rules/no-tabs
    "no-ternary":                     0, // disallow ternary operators                                                                http://eslint.org/docs/rules/no-ternary
    "no-trailing-spaces":             0, // disallow trailing whitespace at the end of lines (fixable)                                http://eslint.org/docs/rules/no-trailing-spaces
    "no-underscore-dangle":           0, // disallow dangling underscores in identifiers                                              http://eslint.org/docs/rules/no-underscore-dangle
    "no-unneeded-ternary":            0, // disallow ternary operators when simpler alternatives exist                                http://eslint.org/docs/rules/no-unneeded-ternary
    "no-whitespace-before-property":  0, // disallow whitespace before properties (fixable)                                           http://eslint.org/docs/rules/no-whitespace-before-property
    "object-curly-newline":           0, // enforce consistent line breaks inside braces (fixable)                                    http://eslint.org/docs/rules/object-curly-newline
    "object-curly-spacing":           0, // enforce consistent spacing inside braces (fixable)                                        http://eslint.org/docs/rules/object-curly-spacing
    "object-property-newline":        0, // enforce placing object properties on separate lines                                       http://eslint.org/docs/rules/object-property-newline
    "one-var-declaration-per-line":   0, // require or disallow newlines around variable declarations                                 http://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var":                        0, // enforce variables to be declared either together or separately in functions               http://eslint.org/docs/rules/one-var
    "operator-assignment":            0, // require or disallow assignment operator shorthand where possible                          http://eslint.org/docs/rules/operator-assignment
    "operator-linebreak":             0, // enforce consistent linebreak style for operators                                          http://eslint.org/docs/rules/operator-linebreak
    "padded-blocks":                  0, // require or disallow padding within blocks (fixable)                                       http://eslint.org/docs/rules/padded-blocks
    "quote-props":                    0, // require quotes around object literal property names (fixable)                             http://eslint.org/docs/rules/quote-props
    "quotes":                         0, // enforce the consistent use of either backticks, double, or single quotes (fixable)        http://eslint.org/docs/rules/quotes
    "require-jsdoc":                  0, // require JSDoc comments                                                                    http://eslint.org/docs/rules/require-jsdoc
    "semi-spacing":                   0, // enforce consistent spacing before and after semicolons (fixable)                          http://eslint.org/docs/rules/semi-spacing
    "semi":                           0, // require or disallow semicolons instead of ASI (fixable)                                   http://eslint.org/docs/rules/semi
    "sort-keys":                      0, // require object keys to be sorted                                                          http://eslint.org/docs/rules/sort-keys
    "sort-vars":                      0, // require variables within the same declaration block to be sorted                          http://eslint.org/docs/rules/sort-vars
    "space-before-blocks":            0, // enforce consistent spacing before blocks (fixable)                                        http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren":    0, // enforce consistent spacing before function definition opening parenthesis (fixable)       http://eslint.org/docs/rules/space-before-function-paren
    "space-in-parens":                0, // enforce consistent spacing inside parentheses (fixable)                                   http://eslint.org/docs/rules/space-in-parens
    "space-infix-ops":                0, // require spacing around infix operators (fixable)                                          http://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops":                0, // enforce consistent spacing before or after unary operators (fixable)                      http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment":                 0, // enforce consistent spacing after the // or /* in a comment (fixable)                      http://eslint.org/docs/rules/spaced-comment
    "unicode-bom":                    0, // require or disallow Unicode byte order mark (BOM) (fixable)                               http://eslint.org/docs/rules/unicode-bom
    "wrap-regex":                     0, // require parenthesis around regex literals (fixable)                                       http://eslint.org/docs/rules/wrap-regex

    // ECMAScript 6 - These rules relate to ES6, also known as ES2015 http://eslint.org/docs/rules/#ecmascript-6
    "arrow-body-style":        0, // require braces around arrow function bodies                                                 http://eslint.org/docs/rules/arrow-body-style
    "arrow-parens":            0, // require parentheses around arrow function arguments (fixable)                               http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing":           0, // enforce consistent spacing before and after the arrow in arrow functions (fixable)          http://eslint.org/docs/rules/arrow-spacing
    "constructor-super":       2, // require super() calls in constructors                                                       http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing":  0, // enforce consistent spacing around * operators in generator functions (fixable)              http://eslint.org/docs/rules/generator-star-spacing
    "no-class-assign":         2, // disallow reassigning class members                                                          http://eslint.org/docs/rules/no-class-assign
    "no-confusing-arrow":      0, // disallow arrow functions where they could be confused with comparisons                      http://eslint.org/docs/rules/no-confusing-arrow
    "no-const-assign":         2, // disallow reassigning const variables                                                        http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members":   2, // disallow duplicate class members                                                            http://eslint.org/docs/rules/no-dupe-class-members
    "no-duplicate-imports":    0, // disallow duplicate module imports                                                           http://eslint.org/docs/rules/no-duplicate-imports
    "no-new-symbol":           2, // disallow new operators with the Symbol object                                               http://eslint.org/docs/rules/no-new-symbol
    "no-restricted-imports":   0, // disallow specified modules when loaded by import                                            http://eslint.org/docs/rules/no-restricted-imports
    "no-this-before-super":    2, // disallow this/super before calling super() in constructors                                  http://eslint.org/docs/rules/no-this-before-super
    "no-useless-computed-key": 0, // disallow unnecessary computed property keys in object literals (fixable)                    http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-constructor":  0, // disallow unnecessary constructors                                                           http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-rename":       0, // disallow renaming import, export, and destructured assignments to the same name (fixable)   http://eslint.org/docs/rules/no-useless-rename
    "no-var":                  0, // require let or const instead of var (fixable)                                               http://eslint.org/docs/rules/no-var
    "object-shorthand":        0, // require or disallow method and property shorthand syntax for object literals (fixable)      http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback":   0, // require arrow functions as callbacks (fixable)                                              http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const":            0, // require const declarations for variables that are never reassigned after declared (fixable) http://eslint.org/docs/rules/prefer-const
    "prefer-numeric-literals": 0, // disallow parseInt() in favor of binary, octal, and hexadecimal literals (fixable)           http://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-reflect":          0, // require Reflect methods where applicable                                                    http://eslint.org/docs/rules/prefer-reflect
    "prefer-rest-params":      0, // require rest parameters instead of arguments                                                http://eslint.org/docs/rules/prefer-rest-params
    "prefer-spread":           0, // require spread operators instead of .apply()                                                http://eslint.org/docs/rules/prefer-spread
    "prefer-template":         0, // require template literals instead of string concatenation (fixable)                         http://eslint.org/docs/rules/prefer-template
    "require-yield":           2, // require generator functions to contain yield                                                http://eslint.org/docs/rules/require-yield
    "rest-spread-spacing":     0, // enforce spacing between rest and spread operators and their expressions (fixable)           http://eslint.org/docs/rules/rest-spread-spacing
    "sort-imports":            0, // enforce sorted import declarations within modules                                           http://eslint.org/docs/rules/sort-imports
    "symbol-description":      0, // require symbol descriptions                                                                 http://eslint.org/docs/rules/symbol-description
    "template-curly-spacing":  0, // require or disallow spacing around embedded expressions of template strings (fixable)       http://eslint.org/docs/rules/template-curly-spacing
    "yield-star-spacing":      0, // require or disallow spacing around the * in yield* expressions (fixable)                    http://eslint.org/docs/rules/yield-star-spacing

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
  }
};
