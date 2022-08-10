export default {
    "name": "Logical",
    "icon": "./Images/Toolbox/comparison.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "true",
                    "isTerminal": true
                }
            },
            "type": "SimpleBlock",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "BOOL_CONST_",
                        "isTerminal": false
                    },
                    "alias": "boolean",
                    "tooltip": "One of true or false"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "true",
                            "isTerminal": true
                        }
                    },
                    {
                        "symbol": {
                            "name": "false",
                            "isTerminal": true
                        }
                    }
                ],
                "selectedSymbol": 0,
                "type": "SelectionBlock",
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
                    "selectedSymbol": 5,
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
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "false",
                    "isTerminal": true
                }
            },
            "type": "SimpleBlock",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "BOOL_CONST_",
                        "isTerminal": false
                    },
                    "alias": "boolean",
                    "tooltip": "One of true or false"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "true",
                            "isTerminal": true
                        }
                    },
                    {
                        "symbol": {
                            "name": "false",
                            "isTerminal": true
                        }
                    }
                ],
                "selectedSymbol": 1,
                "type": "SelectionBlock",
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
                    "selectedSymbol": 5,
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
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "GREATER",
                            "isTerminal": true
                        },
                        "alias": ">",
                        "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 0,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "LESS",
                            "isTerminal": true
                        },
                        "alias": "<",
                        "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 1,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "EQUAL_TO",
                            "isTerminal": true
                        },
                        "alias": "==",
                        "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 2,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "NOT_EQUAL_TO",
                            "isTerminal": true
                        },
                        "alias": "!=",
                        "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 3,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "GREATER_EQUAL",
                            "isTerminal": true
                        },
                        "alias": ">=",
                        "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 4,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "rel_expr",
                    "isTerminal": false
                },
                "tooltip": "An operator that compares the two operands and returns true or false"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "LESS_EQUAL",
                            "isTerminal": true
                        },
                        "alias": "<=",
                        "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "rel_op",
                                "isTerminal": false
                            },
                            "tooltip": "A comparison operator that returns true or false (e.g <, >)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "GREATER",
                                    "isTerminal": true
                                },
                                "alias": ">",
                                "tooltip": "Returns true if the first operand is greater than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS",
                                    "isTerminal": true
                                },
                                "alias": "<",
                                "tooltip": "Returns true if the first operand is less than the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "==",
                                "tooltip": "Returns true if the first operand is equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "NOT_EQUAL_TO",
                                    "isTerminal": true
                                },
                                "alias": "!=",
                                "tooltip": "Returns true if the first operand not equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "GREATER_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": ">=",
                                "tooltip": "Returns true if the first operand is greater than or equal to the second operand, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "LESS_EQUAL",
                                    "isTerminal": true
                                },
                                "alias": "<=",
                                "tooltip": "Returns true if the first operand is less than or equal to the second operand, else returns false"
                            }
                        ],
                        "selectedSymbol": 5,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "user_function_call",
                            "isTerminal": false
                        },
                        "tooltip": "Use a user-defined function"
                    },
                    {
                        "symbol": {
                            "name": "primary_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An identifier or a constant"
                    }
                ],
                "selectedSymbol": 1,
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
                        },
                        {
                            "symbol": {
                                "name": "array_method_call",
                                "isTerminal": false
                            }
                        },
                        {
                            "symbol": {
                                "name": "string_method_call",
                                "isTerminal": false
                            }
                        }
                    ],
                    "selectedSymbol": 4,
                    "type": "SelectionBlock"
                }
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "binary_logical_expr",
                    "isTerminal": false
                },
                "tooltip": "Performs a binary operation with two operands"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "AND",
                            "isTerminal": true
                        },
                        "tooltip": "Returns true if both operands are true, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "logical_binary_op",
                                "isTerminal": false
                            },
                            "tooltip": "Performs a binary operation with two operands"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "AND",
                                    "isTerminal": true
                                },
                                "tooltip": "Returns true if both operands are true, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "OR",
                                    "isTerminal": true
                                },
                                "tooltip": "Returns true if either operand is true, else returns false"
                            }
                        ],
                        "selectedSymbol": 0,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                        "name": "logical_expr",
                        "isTerminal": false
                    },
                    "tooltip": "An expression that evaluates to true or false"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_logical_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs a binary operation with two operands"
                    },
                    {
                        "symbol": {
                            "name": "not_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs logical negation. True becomes false and false becomes true"
                    }
                ],
                "selectedSymbol": 0,
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 2,
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
                            },
                            {
                                "symbol": {
                                    "name": "array_method_call",
                                    "isTerminal": false
                                }
                            },
                            {
                                "symbol": {
                                    "name": "string_method_call",
                                    "isTerminal": false
                                }
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
                    "name": "binary_logical_expr",
                    "isTerminal": false
                },
                "tooltip": "Performs a binary operation with two operands"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The first operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                            "name": "OR",
                            "isTerminal": true
                        },
                        "tooltip": "Returns true if either operand is true, else returns false"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "logical_binary_op",
                                "isTerminal": false
                            },
                            "tooltip": "Performs a binary operation with two operands"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "AND",
                                    "isTerminal": true
                                },
                                "tooltip": "Returns true if both operands are true, else returns false"
                            },
                            {
                                "symbol": {
                                    "name": "OR",
                                    "isTerminal": true
                                },
                                "tooltip": "Returns true if either operand is true, else returns false"
                            }
                        ],
                        "selectedSymbol": 1,
                        "type": "SelectionBlock"
                    }
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The second operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                        "name": "logical_expr",
                        "isTerminal": false
                    },
                    "tooltip": "An expression that evaluates to true or false"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_logical_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs a binary operation with two operands"
                    },
                    {
                        "symbol": {
                            "name": "not_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs logical negation. True becomes false and false becomes true"
                    }
                ],
                "selectedSymbol": 0,
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 2,
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
                            },
                            {
                                "symbol": {
                                    "name": "array_method_call",
                                    "isTerminal": false
                                }
                            },
                            {
                                "symbol": {
                                    "name": "string_method_call",
                                    "isTerminal": false
                                }
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
                    "name": "not_expr",
                    "isTerminal": false
                },
                "tooltip": "Performs logical negation. True becomes false and false becomes true"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "NOT",
                            "isTerminal": true
                        },
                        "tooltip": "Returns true if the operand is false, else returns false"
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        },
                        "tooltip": "The operand"
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
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
                        "name": "logical_expr",
                        "isTerminal": false
                    },
                    "tooltip": "An expression that evaluates to true or false"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_logical_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs a binary operation with two operands"
                    },
                    {
                        "symbol": {
                            "name": "not_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Performs logical negation. True becomes false and false becomes true"
                    }
                ],
                "selectedSymbol": 1,
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
                                "name": "user_function_call",
                                "isTerminal": false
                            },
                            "tooltip": "Use a user-defined function"
                        },
                        {
                            "symbol": {
                                "name": "primary_expr",
                                "isTerminal": false
                            },
                            "tooltip": "An identifier or a constant"
                        }
                    ],
                    "selectedSymbol": 2,
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
                            },
                            {
                                "symbol": {
                                    "name": "array_method_call",
                                    "isTerminal": false
                                }
                            },
                            {
                                "symbol": {
                                    "name": "string_method_call",
                                    "isTerminal": false
                                }
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