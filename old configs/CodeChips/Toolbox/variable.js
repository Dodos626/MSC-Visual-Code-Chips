export default {
    "name": "Variable",
    "icon": "./Images/Toolbox/variable.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "IDENT",
                    "isTerminal": true
                },
                "tooltip": "An identifier starting with _ or a uppercase/lowercase letter following by 0 or more characters that can be _ numbers lowercase/uppercase letters"
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
                    "name": "assign_expr",
                    "isTerminal": false
                },
                "tooltip": "Set a variable's value"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IDENT",
                            "isTerminal": true
                        }
                    },
                    "type": "InputBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "EQUALS",
                            "isTerminal": true
                        },
                        "alias": "="
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "expr",
                            "isTerminal": false
                        }
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
                "selectedSymbol": 3,
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
    ]
}