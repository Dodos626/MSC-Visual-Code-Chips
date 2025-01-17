export let langConfig  = {
    "definitions": [
        {
            "name": "program",
            "all_of": [
                {
                    "type": "non_terminal",
                    "name": "defs"
                }
            ]
        },
        {
            "name": "defs",
            "list_of": [
                {
                    "type": "non_terminal",
                    "name": "def"
                }
            ]
        },
        {
            "name": "stmts",
            "list_of": [
                {
                    "type": "non_terminal",
                    "name": "stmt"
                }
            ]
        },
        {
            "name": "stmt",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "if_stmt",
                    "tooltip": "Do something if a condition is true"
                },
                {
                    "type": "non_terminal",
                    "name": "if_else_stmt",
                    "tooltip": "Do something if a condition is true, else do something else"
                },
                {
                    "type": "non_terminal",
                    "name": "while_stmt",
                    "tooltip": "Do something while a condition is true"
                },
                {
                    "type": "non_terminal",
                    "name": "for_stmt",
                    "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "expr_stmt",
                    "tooltip": "A single expression as a statement"
                },
                {
                    "type": "non_terminal",
                    "name": "break_stmt",
                    "tooltip": "Exit from the current loop"
                },
                {
                    "type": "non_terminal",
                    "name": "continue_stmt",
                    "tooltip": "Continue to the next iteration of the current loop"
                },
                {
                    "type": "non_terminal",
                    "name": "return_stmt",
                    "tooltip": "Return an expression as the result of the current function"
                }
            ]
        },
        {
            "name": "def",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "stmt"
                },
                {
                    "type": "non_terminal",
                    "name": "func_def",
                    "tooltip": "Define reusable code as a function"
                }
            ]
        },
        {
            "name": "expr",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "arith_expr",
                    "tooltip": "Perform a mathematic operation"
                },
                {
                    "type": "non_terminal",
                    "name": "rel_expr",
                    "tooltip": "An operator that compares the two operands and returns true or false"
                },
                {
                    "type": "non_terminal",
                    "name": "logical_expr",
                    "tooltip": "An expression that evaluates to true or false"
                },
                {
                    "type": "non_terminal",
                    "name": "assign_expr",
                    "tooltip": "Set a variable's value"
                },
                {
                    "type": "non_terminal",
                    "name": "call_expr",
                    "tooltip": "Call a user-defined or built-in function/method"
                },
                {
                    "type": "non_terminal",
                    "name": "primary_expr",
                    "tooltip": "An identifier or a constant"
                }
            ]
        },
        {
            "name": "arith_expr",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "binary_arith_expr",
                    "tooltip": "An arithmetic expression with two operands"
                },
                {
                    "type": "non_terminal",
                    "name": "unary_minus_expr",
                    "tooltip": "Negates the value of its operand"
                }
            ]
        },
        {
            "name": "binary_arith_expr",
            "all_of": [
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The first operand"
                },
                {
                    "type": "non_terminal",
                    "name": "arith_op",
                    "tooltip": "An arithmetic operator (e.g. +, -)"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The second operand"
                }
            ]
        },
        {
            "name": "unary_minus_expr",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "UMINUS",
                    "alias": "-"
                },
                {
                    "type": "non_terminal",
                    "name": "expr"
                }
            ]
        },
        {
            "name": "arith_op",
            "any_of": [
                {
                    "type": "terminal",
                    "name": "PLUS",
                    "alias": "+",
                    "tooltip": "Performs addition"
                },
                {
                    "type": "terminal",
                    "name": "MINUS",
                    "alias": "-",
                    "tooltip": "Performs subtraction"
                },
                {
                    "type": "terminal",
                    "name": "TIMES",
                    "alias": "*",
                    "tooltip": "Performs multipliction"
                },
                {
                    "type": "terminal",
                    "name": "BY",
                    "alias": "/",
                    "tooltip": "Performs division"
                },
                {
                    "type": "terminal",
                    "name": "MODULO",
                    "alias": "%",
                    "tooltip": "Performs the modulo operation"
                }
            ]
        },
        {
            "name": "rel_expr",
            "all_of": [
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The first operand"
                },
                {
                    "type": "non_terminal",
                    "name": "rel_op",
                    "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The second operand"
                }
            ]
        },
        {
            "name": "rel_op",
            "any_of": [
                {
                    "type": "terminal",
                    "name": "GREATER",
                    "alias": ">",
                    "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "LESS",
                    "alias": "<",
                    "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "EQUAL_TO",
                    "alias": "==",
                    "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "NOT_EQUAL_TO",
                    "alias": "!=",
                    "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "GREATER_EQUAL",
                    "alias": ">=",
                    "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "LESS_EQUAL",
                    "alias": "<=",
                    "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                }
            ]
        },
        {
            "name": "logical_expr",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "binary_logical_expr",
                    "tooltip": "Performs a binary operation with two operands"
                },
                {
                    "type": "non_terminal",
                    "name": "not_expr",
                    "tooltip": "Performs logical negation. True becomes false and false becomes true"
                }
            ]
        },
        {
            "name": "binary_logical_expr",
            "all_of": [
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The first operand"
                },
                {
                    "type": "non_terminal",
                    "name": "logical_binary_op",
                    "tooltip": "Performs a binary operation with two operands"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The second operand"
                }
            ]
        },
        {
            "name": "logical_binary_op",
            "any_of": [
                {
                    "type": "terminal",
                    "name": "AND",
                    "tooltip": "Returns true if both operands are true, else returns false"
                },
                {
                    "type": "terminal",
                    "name": "OR",
                    "tooltip": "Returns true if either operand is true, else returns false"
                }
            ]
        },
        {
            "name": "not_expr",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "NOT",
                    "tooltip": "Returns true if the operand is false, else returns false"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "tooltip": "The operand"
                }
            ]
        },
        {
            "name": "primary_expr",
            "any_of": [
                {
                    "type": "terminal",
                    "name": "IDENT",
                    "tooltip": "An identifier starting with _ or a uppercase/lowercase letter following by 0 or more characters that can be _ numbers lowercase/uppercase letters"
                },
                {
                    "type": "terminal",
                    "name": "INT_CONST",
                    "tooltip": "An integer is a positive, zero, or negative number that can be written without a fractional component (i.e. no decimal point places)"
                },
                {
                    "type": "terminal",
                    "name": "FLOAT_CONST",
                    "tooltip": "A floating-point number is a rational number (i.e. includes numbers with decimal point places"
                },
                {
                    "type": "terminal",
                    "name": "CHAR_CONST",
                    "tooltip": "One single character"
                },
                {
                    "type": "terminal",
                    "name": "STRING_CONST",
                    "tooltip": "Any sequence of characters or the empty sequence"
                },
                {
                    "type": "non_terminal",
                    "name": "BOOL_CONST_",
                    "alias": "boolean",
                    "tooltip": "One of true or false"
                },
                {
                    "type": "non_terminal",
                    "name": "ARRAY_CONST",
                    "tooltip": "An array of elements"
                }
            ]
        },
        {
            "name": "BOOL_CONST_",
            "any_of": [
                {
                    "type": "terminal",
                    "name": "true"
                },
                {
                    "type": "terminal",
                    "name": "false"
                }
            ]
        },
        {
            "name": "call_expr",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "input_output_call",
                    "tooltip": "Use a built-in input/output function"
                },
                {
                    "type": "non_terminal",
                    "name": "math_call",
                    "tooltip": "Use a built-in math function"
                },
                {
                    "type": "non_terminal",
                    "name": "string_method_call",
                    "tooltip": "Use a built-in string method"
                },
                {
                    "type": "non_terminal",
                    "name": "array_method_call",
                    "tooltip": "Use a built-in array method"
                },
                {
                    "type": "non_terminal",
                    "name": "user_function_call",
                    "tooltip": "Use a user-defined function"
                }
            ]
        },
        {
            "name": "ARRAY_CONST",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "ARRAY"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "element_list"
                }
            ]
        },
        {
            "name": "element_list",
            "list_of": [
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "element"
                }
            ]
        },
        {
            "name": "assign_expr",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "IDENT"
                },
                {
                    "type": "terminal",
                    "name": "EQUALS",
                    "alias": "="
                },
                {
                    "type": "non_terminal",
                    "name": "expr"
                }
            ]
        },
        {
            "name": "func_def",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "FUNCTION"
                },
                {
                    "type": "terminal",
                    "name": "IDENT",
                    "alias": "NAME"
                },
                {
                    "type": "terminal",
                    "name": "OF"
                },
                {
                    "type": "non_terminal",
                    "name": "ident_list"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts"
                }
            ]
        },
        {
            "name": "break_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "BREAK"
                }
            ]
        },
        {
            "name": "continue_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CONTINUE"
                }
            ]
        },
        {
            "name": "return_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "RETURN"
                },
                {
                    "type": "non_terminal",
                    "name": "expr"
                }
            ]
        },
        {
            "name": "user_function_call",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "IDENT",
                    "alias": "FUNCTION NAME"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr_list"
                }
            ]
        },
        {
            "name": "array_method_call",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "IN ARRAY"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "array"
                },
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "non_terminal",
                    "name": "array_method"
                }
            ]
        },
        {
            "name": "array_method",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "array_get",
                    "alias": "get",
                    "tooltip": "Get an element by its position in the array"
                },
                {
                    "type": "non_terminal",
                    "name": "array_insert",
                    "alias": "insert",
                    "tooltip": "Insert an element at a position in the array. Elements that previously were at the position, or after it, are moved one place to the right"
                },
                {
                    "type": "non_terminal",
                    "name": "array_push_back",
                    "alias": "push_back",
                    "tooltip": "Insert an element at the end of the array"
                },
                {
                    "type": "non_terminal",
                    "name": "array_set",
                    "alias": "set",
                    "tooltip": "Set (Replace) an element in a position of the array to a new character"
                },
                {
                    "type": "non_terminal",
                    "name": "array_size",
                    "alias": "get_size",
                    "tooltip": "Get the count of elements in the array"
                }
            ]
        },
        {
            "name": "array_get",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "get"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "index"
                }
            ]
        },
        {
            "name": "array_insert",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "insert"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "index"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "element"
                }
            ]
        },
        {
            "name": "array_push_back",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "push_back"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "element"
                }
            ]
        },
        {
            "name": "array_set",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "set"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "index"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "element"
                }
            ]
        },
        {
            "name": "array_size",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "get_size"
                }
            ]
        },
        {
            "name": "string_method_call",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "IN STRING"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "string"
                },
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "non_terminal",
                    "name": "string_method"
                }
            ]
        },
        {
            "name": "string_method",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "string_append",
                    "alias": "append",
                    "tooltip": "Append a string to the end (suffix) of the string"
                },
                {
                    "type": "non_terminal",
                    "name": "string_get_character",
                    "alias": "get_character",
                    "tooltip": "Get the character at the specified position of the string"
                },
                {
                    "type": "non_terminal",
                    "name": "string_get_substring",
                    "alias": "get_substring",
                    "tooltip": "Get a substring of a string, giving a start position and an end position"
                },
                {
                    "type": "non_terminal",
                    "name": "string_size",
                    "alias": "get_size",
                    "tooltip": "Get the count of characters contained in the string"
                }
            ]
        },
        {
            "name": "string_append",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "append"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "string"
                }
            ]
        },
        {
            "name": "string_get_character",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "get_character"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "index"
                }
            ]
        },
        {
            "name": "string_get_substring",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "get_substring"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "start_index"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "end_index"
                }
            ]
        },
        {
            "name": "string_size",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "get_size"
                }
            ]
        },
        {
            "name": "input_output_call",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "input_output_print",
                    "alias": "print",
                    "tooltip": "Print the value of the given expression (text, number etc.)"
                },
                {
                    "type": "non_terminal",
                    "name": "input_output_input",
                    "alias": "input",
                    "tooltip": "Prompt the user with a text message and get user-input"
                }
            ]
        },
        {
            "name": "input_output_print",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "print"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr_list"
                }
            ]
        },
        {
            "name": "input_output_input",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "input"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "prompt_message"
                }
            ]
        },
        {
            "name": "math_call",
            "any_of": [
                {
                    "type": "non_terminal",
                    "name": "math_pow",
                    "alias": "pow",
                    "tooltip": "Raise a number into a power"
                },
                {
                    "type": "non_terminal",
                    "name": "math_sqrt",
                    "alias": "sqrt",
                    "tooltip": "Get the square root of a number"
                },
                {
                    "type": "non_terminal",
                    "name": "math_round",
                    "alias": "round",
                    "tooltip": "Get the nearset integer to the given number"
                },
                {
                    "type": "non_terminal",
                    "name": "math_floor",
                    "alias": "floor",
                    "tooltip": "Get the greatest integer less than or equal to the given number"
                },
                {
                    "type": "non_terminal",
                    "name": "math_ceiling",
                    "alias": "ceiling",
                    "tooltip": "Get the least integer greater than or equal to the given number"
                },
                {
                    "type": "non_terminal",
                    "name": "math_sin",
                    "alias": "sin",
                    "tooltip": "Get the sin of the given angle in degrees"
                },
                {
                    "type": "non_terminal",
                    "name": "math_cos",
                    "alias": "cos",
                    "tooltip": "Get the cos of the given angle in degrees"
                }
            ]
        },
        {
            "name": "math_pow",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "pow"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "exponent"
                }
            ]
        },
        {
            "name": "math_sqrt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "sqrt"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "math_round",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "round"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "math_floor",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "floor"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "math_ceiling",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "ceiling"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "math_sin",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "sin"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "math_cos",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "CALL"
                },
                {
                    "type": "terminal",
                    "name": "cos"
                },
                {
                    "type": "terminal",
                    "name": "WITH"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "number"
                }
            ]
        },
        {
            "name": "if_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "IF"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "condition_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts",
                    "alias": "if_part"
                }
            ]
        },
        {
            "name": "if_else_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "IF"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "condition_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts",
                    "alias": "if_part"
                },
                {
                    "type": "terminal",
                    "name": "ELSE"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts",
                    "alias": "else_part"
                }
            ]
        },
        {
            "name": "while_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "WHILE"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "condition_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts",
                    "alias": "while_part"
                }
            ]
        },
        {
            "name": "for_stmt",
            "all_of": [
                {
                    "type": "terminal",
                    "name": "FOR"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "initialization_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "condition_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "step_expr"
                },
                {
                    "type": "non_terminal",
                    "name": "stmts",
                    "alias": "for_part"
                }
            ]
        },
        {
            "name": "ident_list",
            "list_of": [
                {
                    "type": "terminal",
                    "name": "IDENT"
                }
            ]
        },
        {
            "name": "expr_list",
            "list_of": [
                {
                    "type": "non_terminal",
                    "name": "expr",
                    "alias": "arg"
                }
            ]
        }
    ]
}