export default {
    "name": "Math",
    "icon": "./Images/Toolbox/math.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "INT_CONST",
                    "isTerminal": true
                },
                "tooltip": "An integer is a positive, zero, or negative number that can be written without a fractional component (i.e. no decimal point places)"
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
                    "name": "FLOAT_CONST",
                    "isTerminal": true
                },
                "tooltip": "A floating-point number is a rational number (i.e. includes numbers with decimal point places"
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
                    "name": "binary_arith_expr",
                    "isTerminal": false
                },
                "tooltip": "An arithmetic expression with two operands"
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
                            "name": "PLUS",
                            "isTerminal": true
                        },
                        "alias": "+",
                        "tooltip": "Performs addition"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "arith_op",
                                "isTerminal": false
                            },
                            "tooltip": "An arithmetic operator (e.g. +, -)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "PLUS",
                                    "isTerminal": true
                                },
                                "alias": "+",
                                "tooltip": "Performs addition"
                            },
                            {
                                "symbol": {
                                    "name": "MINUS",
                                    "isTerminal": true
                                },
                                "alias": "-",
                                "tooltip": "Performs subtraction"
                            },
                            {
                                "symbol": {
                                    "name": "TIMES",
                                    "isTerminal": true
                                },
                                "alias": "*",
                                "tooltip": "Performs multiplication"
                            },
                            {
                                "symbol": {
                                    "name": "BY",
                                    "isTerminal": true
                                },
                                "alias": "/",
                                "tooltip": "Performs division"
                            },
                            {
                                "symbol": {
                                    "name": "MODULO",
                                    "isTerminal": true
                                },
                                "alias": "%",
                                "tooltip": "Performs the modulo operation"
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
                        "name": "arith_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Perform a mathematic operation"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_arith_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An arithmetic expression with two operands"
                    },
                    {
                        "symbol": {
                            "name": "unary_minus_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Negates the value of its operand"
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
                    "selectedSymbol": 0,
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
                    "name": "binary_arith_expr",
                    "isTerminal": false
                },
                "tooltip": "An arithmetic expression with two operands"
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
                            "name": "MINUS",
                            "isTerminal": true
                        },
                        "alias": "-",
                        "tooltip": "Performs subtraction"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "arith_op",
                                "isTerminal": false
                            },
                            "tooltip": "An arithmetic operator (e.g. +, -)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "PLUS",
                                    "isTerminal": true
                                },
                                "alias": "+",
                                "tooltip": "Performs addition"
                            },
                            {
                                "symbol": {
                                    "name": "MINUS",
                                    "isTerminal": true
                                },
                                "alias": "-",
                                "tooltip": "Performs subtraction"
                            },
                            {
                                "symbol": {
                                    "name": "TIMES",
                                    "isTerminal": true
                                },
                                "alias": "*",
                                "tooltip": "Performs multiplication"
                            },
                            {
                                "symbol": {
                                    "name": "BY",
                                    "isTerminal": true
                                },
                                "alias": "/",
                                "tooltip": "Performs division"
                            },
                            {
                                "symbol": {
                                    "name": "MODULO",
                                    "isTerminal": true
                                },
                                "alias": "%",
                                "tooltip": "Performs the modulo operation"
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
                        "name": "arith_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Perform a mathematic operation"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_arith_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An arithmetic expression with two operands"
                    },
                    {
                        "symbol": {
                            "name": "unary_minus_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Negates the value of its operand"
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
                    "selectedSymbol": 0,
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
                    "name": "binary_arith_expr",
                    "isTerminal": false
                },
                "tooltip": "An arithmetic expression with two operands"
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
                            "name": "TIMES",
                            "isTerminal": true
                        },
                        "alias": "*",
                        "tooltip": "Performs multiplication"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "arith_op",
                                "isTerminal": false
                            },
                            "tooltip": "An arithmetic operator (e.g. +, -)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "PLUS",
                                    "isTerminal": true
                                },
                                "alias": "+",
                                "tooltip": "Performs addition"
                            },
                            {
                                "symbol": {
                                    "name": "MINUS",
                                    "isTerminal": true
                                },
                                "alias": "-",
                                "tooltip": "Performs subtraction"
                            },
                            {
                                "symbol": {
                                    "name": "TIMES",
                                    "isTerminal": true
                                },
                                "alias": "*",
                                "tooltip": "Performs multiplication"
                            },
                            {
                                "symbol": {
                                    "name": "BY",
                                    "isTerminal": true
                                },
                                "alias": "/",
                                "tooltip": "Performs division"
                            },
                            {
                                "symbol": {
                                    "name": "MODULO",
                                    "isTerminal": true
                                },
                                "alias": "%",
                                "tooltip": "Performs the modulo operation"
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
                        "name": "arith_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Perform a mathematic operation"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_arith_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An arithmetic expression with two operands"
                    },
                    {
                        "symbol": {
                            "name": "unary_minus_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Negates the value of its operand"
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
                    "selectedSymbol": 0,
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
                    "name": "binary_arith_expr",
                    "isTerminal": false
                },
                "tooltip": "An arithmetic expression with two operands"
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
                            "name": "BY",
                            "isTerminal": true
                        },
                        "alias": "/",
                        "tooltip": "Performs division"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "arith_op",
                                "isTerminal": false
                            },
                            "tooltip": "An arithmetic operator (e.g. +, -)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "PLUS",
                                    "isTerminal": true
                                },
                                "alias": "+",
                                "tooltip": "Performs addition"
                            },
                            {
                                "symbol": {
                                    "name": "MINUS",
                                    "isTerminal": true
                                },
                                "alias": "-",
                                "tooltip": "Performs subtraction"
                            },
                            {
                                "symbol": {
                                    "name": "TIMES",
                                    "isTerminal": true
                                },
                                "alias": "*",
                                "tooltip": "Performs multiplication"
                            },
                            {
                                "symbol": {
                                    "name": "BY",
                                    "isTerminal": true
                                },
                                "alias": "/",
                                "tooltip": "Performs division"
                            },
                            {
                                "symbol": {
                                    "name": "MODULO",
                                    "isTerminal": true
                                },
                                "alias": "%",
                                "tooltip": "Performs the modulo operation"
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
                        "name": "arith_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Perform a mathematic operation"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_arith_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An arithmetic expression with two operands"
                    },
                    {
                        "symbol": {
                            "name": "unary_minus_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Negates the value of its operand"
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
                    "selectedSymbol": 0,
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
                    "name": "binary_arith_expr",
                    "isTerminal": false
                },
                "tooltip": "An arithmetic expression with two operands"
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
                            "name": "MODULO",
                            "isTerminal": true
                        },
                        "alias": "%",
                        "tooltip": "Performs the modulo operation"
                    },
                    "type": "SimpleBlock",
                    "generatedBy": {
                        "symbol": {
                            "symbol": {
                                "name": "arith_op",
                                "isTerminal": false
                            },
                            "tooltip": "An arithmetic operator (e.g. +, -)"
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "PLUS",
                                    "isTerminal": true
                                },
                                "alias": "+",
                                "tooltip": "Performs addition"
                            },
                            {
                                "symbol": {
                                    "name": "MINUS",
                                    "isTerminal": true
                                },
                                "alias": "-",
                                "tooltip": "Performs subtraction"
                            },
                            {
                                "symbol": {
                                    "name": "TIMES",
                                    "isTerminal": true
                                },
                                "alias": "*",
                                "tooltip": "Performs multiplication"
                            },
                            {
                                "symbol": {
                                    "name": "BY",
                                    "isTerminal": true
                                },
                                "alias": "/",
                                "tooltip": "Performs division"
                            },
                            {
                                "symbol": {
                                    "name": "MODULO",
                                    "isTerminal": true
                                },
                                "alias": "%",
                                "tooltip": "Performs the modulo operation"
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
                        "name": "arith_expr",
                        "isTerminal": false
                    },
                    "tooltip": "Perform a mathematic operation"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "binary_arith_expr",
                            "isTerminal": false
                        },
                        "tooltip": "An arithmetic expression with two operands"
                    },
                    {
                        "symbol": {
                            "name": "unary_minus_expr",
                            "isTerminal": false
                        },
                        "tooltip": "Negates the value of its operand"
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
                    "selectedSymbol": 0,
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
                    "name": "math_pow",
                    "isTerminal": false
                },
                "alias": "pow",
                "tooltip": "Raise a number into a power"
            },
            "elems": [
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
                            "name": "pow",
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
                        "alias": "number"
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
                        "alias": "exponent"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 0,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_sqrt",
                    "isTerminal": false
                },
                "alias": "sqrt",
                "tooltip": "Get the square root of a number"
            },
            "elems": [
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
                            "name": "sqrt",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 1,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_round",
                    "isTerminal": false
                },
                "alias": "round",
                "tooltip": "Get the nearset integer to the given number"
            },
            "elems": [
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
                            "name": "round",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 2,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_floor",
                    "isTerminal": false
                },
                "alias": "floor",
                "tooltip": "Get the greatest integer less than or equal to the given number"
            },
            "elems": [
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
                            "name": "floor",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 3,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_ceiling",
                    "isTerminal": false
                },
                "alias": "ceiling",
                "tooltip": "Get the least integer greater than or equal to the given number,"
            },
            "elems": [
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
                            "name": "ceiling",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 4,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_sin",
                    "isTerminal": false
                },
                "alias": "sin",
                "tooltip": "Get the sin of the given angle in degrees"
            },
            "elems": [
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
                            "name": "sin",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 5,
                "type": "SelectionBlock",
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
        },
        {
            "symbol": {
                "symbol": {
                    "name": "math_cos",
                    "isTerminal": false
                },
                "alias": "cos",
                "tooltip": "Get the cos of the given angle in degrees"
            },
            "elems": [
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
                            "name": "cos",
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
                        "alias": "number"
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
                        "name": "math_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in math function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "math_pow",
                            "isTerminal": false
                        },
                        "alias": "pow",
                        "tooltip": "Raise a number into a power"
                    },
                    {
                        "symbol": {
                            "name": "math_sqrt",
                            "isTerminal": false
                        },
                        "alias": "sqrt",
                        "tooltip": "Get the square root of a number"
                    },
                    {
                        "symbol": {
                            "name": "math_round",
                            "isTerminal": false
                        },
                        "alias": "round",
                        "tooltip": "Get the nearset integer to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_floor",
                            "isTerminal": false
                        },
                        "alias": "floor",
                        "tooltip": "Get the greatest integer less than or equal to the given number"
                    },
                    {
                        "symbol": {
                            "name": "math_ceiling",
                            "isTerminal": false
                        },
                        "alias": "ceiling",
                        "tooltip": "Get the least integer greater than or equal to the given number,"
                    },
                    {
                        "symbol": {
                            "name": "math_sin",
                            "isTerminal": false
                        },
                        "alias": "sin",
                        "tooltip": "Get the sin of the given angle in degrees"
                    },
                    {
                        "symbol": {
                            "name": "math_cos",
                            "isTerminal": false
                        },
                        "alias": "cos",
                        "tooltip": "Get the cos of the given angle in degrees"
                    }
                ],
                "selectedSymbol": 6,
                "type": "SelectionBlock",
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
        }
    ]
}