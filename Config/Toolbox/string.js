export default {
    "name": "String",
    "icon": "./Images/Toolbox/string.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "STRING_CONST",
                    "isTerminal": true
                },
                "tooltip": "Any sequence of characters or the empty sequence"
            },
            "type": "InputBlock",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "primary_expr",
                        "isTerminal": false
                    },
                    "tooltip": "An identifier or a constant"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "IDENT",
                            "isTerminal": true
                        },
                        "tooltip": "An identifier starting with _ or a uppercase/lowercase letter following by 0 or more characters that can be _ numbers lowercase/uppercase letters"
                    },
                    {
                        "symbol": {
                            "name": "INT_CONST",
                            "isTerminal": true
                        },
                        "tooltip": "An integer is a positive, zero, or negative number that can be written without a fractional component (i.e. no decimal point places)"
                    },
                    {
                        "symbol": {
                            "name": "FLOAT_CONST",
                            "isTerminal": true
                        },
                        "tooltip": "A floating-point number is a rational number (i.e. includes numbers with decimal point places"
                    },
                    {
                        "symbol": {
                            "name": "CHAR_CONST",
                            "isTerminal": true
                        },
                        "tooltip": "One single character"
                    },
                    {
                        "symbol": {
                            "name": "STRING_CONST",
                            "isTerminal": true
                        },
                        "tooltip": "Any sequence of characters or the empty sequence"
                    },
                    {
                        "symbol": {
                            "name": "BOOL_CONST_",
                            "isTerminal": false
                        },
                        "alias": "boolean",
                        "tooltip": "One of true or false"
                    },
                    {
                        "symbol": {
                            "name": "ARRAY_CONST",
                            "isTerminal": false
                        },
                        "tooltip": "An array of elements"
                    }
                ],
                "selectedSymbol": 4,
                "type": "SelectionBlock",
                "generatedBy": {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "expr_stmt",
                        "tooltip": "A single expression as a statement"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 5,
                    "type": "SelectionBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "stmt",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "if_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "if_else_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true, else do something else"
                            },
                            {
                                "symbol": {
                                    "name": "while_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "for_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                            },
                            {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "expr_stmt",
                                "tooltip": "A single expression as a statement"
                            },
                            {
                                "symbol": {
                                    "name": "func_def",
                                    "isTerminal": false
                                },
                                "tooltip": "Define reusable code as a function"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "string_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in string method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN STRING",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "string"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "type": "SelectionBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "CALL",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "string_append",
                            "isTerminal": false
                        },
                        "alias": "append",
                        "tooltip": "Append a string to the end (suffix) of the string"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "append",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "WITH",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "string"
                            },
                            "alternateSymbols": [
                                {
                                    "symbol": {
                                        "name": "arith_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Perform a mathematic operation"
                                },
                                {
                                    "symbol": {
                                        "name": "rel_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An operator that compares the two operands and returns true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "logical_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An expression that evaluates to true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "assign_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Set a variable's value"
                                },
                                {
                                    "symbol": {
                                        "name": "call_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Call a user-defined or built-in function/method"
                                },
                                {
                                    "symbol": {
                                        "name": "primary_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An identifier or a constant"
                                }
                            ],
                            "type": "SelectionBlock"
                        }
                    ],
                    "type": "Group",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "string_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "string_append",
                                    "isTerminal": false
                                },
                                "alias": "append",
                                "tooltip": "Append a string to the end (suffix) of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_character",
                                    "isTerminal": false
                                },
                                "alias": "get_character",
                                "tooltip": "Get the character at the specified position of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_substring",
                                    "isTerminal": false
                                },
                                "alias": "get_substring",
                                "tooltip": "Get a substring of a string, giving a start position and an end position"
                            },
                            {
                                "symbol": {
                                    "name": "string_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of characters contained in the string"
                            }
                        ],
                        "selectedSymbol": 0,
                        "type": "SelectionBlock"
                    }
                }
            ],
            "type": "Group",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "call_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Call a user-defined or built-in function/method"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in input/output function"
                    },
                    {
                        "symbol": {
                            "name": "math_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in math function"
                    },
                    {
                        "symbol": {
                            "name": "string_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in string method"
                    },
                    {
                        "symbol": {
                            "name": "array_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in array method"
                    },
                    {
                        "symbol": {
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    }
                ],
                "selectedSymbol": 2,
                "type": "SelectionBlock",
                "generatedBy": {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "expr_stmt",
                        "tooltip": "A single expression as a statement"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "stmt",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "if_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "if_else_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true, else do something else"
                            },
                            {
                                "symbol": {
                                    "name": "while_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "for_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                            },
                            {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "expr_stmt",
                                "tooltip": "A single expression as a statement"
                            },
                            {
                                "symbol": {
                                    "name": "func_def",
                                    "isTerminal": false
                                },
                                "tooltip": "Define reusable code as a function"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "string_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in string method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN STRING",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "string"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "type": "SelectionBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "CALL",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "string_get_character",
                            "isTerminal": false
                        },
                        "alias": "get_character",
                        "tooltip": "Get the character at the specified position of the string"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "get_character",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "WITH",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "index"
                            },
                            "alternateSymbols": [
                                {
                                    "symbol": {
                                        "name": "arith_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Perform a mathematic operation"
                                },
                                {
                                    "symbol": {
                                        "name": "rel_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An operator that compares the two operands and returns true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "logical_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An expression that evaluates to true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "assign_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Set a variable's value"
                                },
                                {
                                    "symbol": {
                                        "name": "call_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Call a user-defined or built-in function/method"
                                },
                                {
                                    "symbol": {
                                        "name": "primary_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An identifier or a constant"
                                }
                            ],
                            "type": "SelectionBlock"
                        }
                    ],
                    "type": "Group",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "string_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "string_append",
                                    "isTerminal": false
                                },
                                "alias": "append",
                                "tooltip": "Append a string to the end (suffix) of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_character",
                                    "isTerminal": false
                                },
                                "alias": "get_character",
                                "tooltip": "Get the character at the specified position of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_substring",
                                    "isTerminal": false
                                },
                                "alias": "get_substring",
                                "tooltip": "Get a substring of a string, giving a start position and an end position"
                            },
                            {
                                "symbol": {
                                    "name": "string_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of characters contained in the string"
                            }
                        ],
                        "selectedSymbol": 1,
                        "type": "SelectionBlock"
                    }
                }
            ],
            "type": "Group",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "call_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Call a user-defined or built-in function/method"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in input/output function"
                    },
                    {
                        "symbol": {
                            "name": "math_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in math function"
                    },
                    {
                        "symbol": {
                            "name": "string_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in string method"
                    },
                    {
                        "symbol": {
                            "name": "array_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in array method"
                    },
                    {
                        "symbol": {
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    }
                ],
                "selectedSymbol": 2,
                "type": "SelectionBlock",
                "generatedBy": {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "expr_stmt",
                        "tooltip": "A single expression as a statement"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "stmt",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "if_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "if_else_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true, else do something else"
                            },
                            {
                                "symbol": {
                                    "name": "while_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "for_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                            },
                            {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "expr_stmt",
                                "tooltip": "A single expression as a statement"
                            },
                            {
                                "symbol": {
                                    "name": "func_def",
                                    "isTerminal": false
                                },
                                "tooltip": "Define reusable code as a function"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "string_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in string method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN STRING",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "string"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "type": "SelectionBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "CALL",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "string_get_substring",
                            "isTerminal": false
                        },
                        "alias": "get_substring",
                        "tooltip": "Get a substring of a string, giving a start position and an end position"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "get_substring",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "WITH",
                                    "isTerminal": true
                                }
                            },
                            "type": "SimpleBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "start_index"
                            },
                            "alternateSymbols": [
                                {
                                    "symbol": {
                                        "name": "arith_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Perform a mathematic operation"
                                },
                                {
                                    "symbol": {
                                        "name": "rel_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An operator that compares the two operands and returns true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "logical_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An expression that evaluates to true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "assign_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Set a variable's value"
                                },
                                {
                                    "symbol": {
                                        "name": "call_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Call a user-defined or built-in function/method"
                                },
                                {
                                    "symbol": {
                                        "name": "primary_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An identifier or a constant"
                                }
                            ],
                            "type": "SelectionBlock"
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "end_index"
                            },
                            "alternateSymbols": [
                                {
                                    "symbol": {
                                        "name": "arith_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Perform a mathematic operation"
                                },
                                {
                                    "symbol": {
                                        "name": "rel_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An operator that compares the two operands and returns true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "logical_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An expression that evaluates to true or false"
                                },
                                {
                                    "symbol": {
                                        "name": "assign_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Set a variable's value"
                                },
                                {
                                    "symbol": {
                                        "name": "call_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "Call a user-defined or built-in function/method"
                                },
                                {
                                    "symbol": {
                                        "name": "primary_expr",
                                        "isTerminal": false
                                    },
                                    "tooltip": "An identifier or a constant"
                                }
                            ],
                            "type": "SelectionBlock"
                        }
                    ],
                    "type": "Group",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "string_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "string_append",
                                    "isTerminal": false
                                },
                                "alias": "append",
                                "tooltip": "Append a string to the end (suffix) of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_character",
                                    "isTerminal": false
                                },
                                "alias": "get_character",
                                "tooltip": "Get the character at the specified position of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_substring",
                                    "isTerminal": false
                                },
                                "alias": "get_substring",
                                "tooltip": "Get a substring of a string, giving a start position and an end position"
                            },
                            {
                                "symbol": {
                                    "name": "string_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of characters contained in the string"
                            }
                        ],
                        "selectedSymbol": 2,
                        "type": "SelectionBlock"
                    }
                }
            ],
            "type": "Group",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "call_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Call a user-defined or built-in function/method"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in input/output function"
                    },
                    {
                        "symbol": {
                            "name": "math_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in math function"
                    },
                    {
                        "symbol": {
                            "name": "string_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in string method"
                    },
                    {
                        "symbol": {
                            "name": "array_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in array method"
                    },
                    {
                        "symbol": {
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    }
                ],
                "selectedSymbol": 2,
                "type": "SelectionBlock",
                "generatedBy": {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "expr_stmt",
                        "tooltip": "A single expression as a statement"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "stmt",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "if_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "if_else_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true, else do something else"
                            },
                            {
                                "symbol": {
                                    "name": "while_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "for_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                            },
                            {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "expr_stmt",
                                "tooltip": "A single expression as a statement"
                            },
                            {
                                "symbol": {
                                    "name": "func_def",
                                    "isTerminal": false
                                },
                                "tooltip": "Define reusable code as a function"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "string_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in string method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN STRING",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "string"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "type": "SelectionBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "CALL",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "get_size",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "string_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "string_append",
                                    "isTerminal": false
                                },
                                "alias": "append",
                                "tooltip": "Append a string to the end (suffix) of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_character",
                                    "isTerminal": false
                                },
                                "alias": "get_character",
                                "tooltip": "Get the character at the specified position of the string"
                            },
                            {
                                "symbol": {
                                    "name": "string_get_substring",
                                    "isTerminal": false
                                },
                                "alias": "get_substring",
                                "tooltip": "Get a substring of a string, giving a start position and an end position"
                            },
                            {
                                "symbol": {
                                    "name": "string_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of characters contained in the string"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            ],
            "type": "Group",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "call_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Call a user-defined or built-in function/method"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in input/output function"
                    },
                    {
                        "symbol": {
                            "name": "math_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in math function"
                    },
                    {
                        "symbol": {
                            "name": "string_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in string method"
                    },
                    {
                        "symbol": {
                            "name": "array_method_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a built-in array method"
                    },
                    {
                        "symbol": {
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    }
                ],
                "selectedSymbol": 2,
                "type": "SelectionBlock",
                "generatedBy": {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "expr_stmt",
                        "tooltip": "A single expression as a statement"
                    },
                    "alternateSymbols": [
                        {
                            "symbol": {
                                "name": "arith_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Perform a mathematic operation"
                        },
                        {
                            "symbol": {
                                "name": "rel_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An operator that compares the two operands and returns true or false"
                        },
                        {
                            "symbol": {
                                "name": "logical_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An expression that evaluates to true or false"
                        },
                        {
                            "symbol": {
                                "name": "assign_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Set a variable's value"
                        },
                        {
                            "symbol": {
                                "name": "call_expr",
                                "isTerminal": false
                            },
                            "tooltip": "Call a user-defined or built-in function/method"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "stmt",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "if_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "if_else_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something if a condition is true, else do something else"
                            },
                            {
                                "symbol": {
                                    "name": "while_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true"
                            },
                            {
                                "symbol": {
                                    "name": "for_stmt",
                                    "isTerminal": false
                                },
                                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
                            },
                            {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "expr_stmt",
                                "tooltip": "A single expression as a statement"
                            },
                            {
                                "symbol": {
                                    "name": "func_def",
                                    "isTerminal": false
                                },
                                "tooltip": "Define reusable code as a function"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                }
            }
        }
    ]
}