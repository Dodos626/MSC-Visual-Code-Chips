export default {
    "name": "Function",
    "icon": "./Images/Toolbox/function.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "func_def",
                    "isTerminal": false
                },
                "tooltip": "Define reusable code as a function"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "FUNCTION",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "IDENT",
                            "isTerminal": true
                        },
                        "alias": "NAME"
                    },
                    "type": "InputBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "OF",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "ident_list",
                            "isTerminal": false
                        }
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
                        }
                    ],
                    "repetitiveElem": {
                        "symbol": {
                            "symbol": {
                                "name": "IDENT",
                                "isTerminal": true
                            }
                        },
                        "type": "InputBlock"
                    },
                    "type": "RepetitionGroup"
                },
                {
                    "type": "NewLine"
                },
                {
                    "type": "TabBlock"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "stmts",
                            "isTerminal": false
                        }
                    },
                    "elems": [
                        {
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
                            "type": "SelectionBlock"
                        }
                    ],
                    "repetitiveElem": {
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
                        "type": "SelectionBlock"
                    },
                    "type": "RepetitionGroup"
                }
            ],
            "type": "Group",
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
                "selectedSymbol": 5,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "user_function_call",
                    "isTerminal": false
                },
                "tooltip": "Use a user-defined function"
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
                            "name": "IDENT",
                            "isTerminal": true
                        },
                        "alias": "FUNCTION NAME"
                    },
                    "type": "InputBlock"
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
                            "name": "expr_list",
                            "isTerminal": false
                        }
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "arg"
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
                    "repetitiveElem": {
                        "symbol": {
                            "symbol": {
                                "name": "expr",
                                "isTerminal": false
                            },
                            "alias": "arg"
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
                    "type": "RepetitionGroup"
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
    ]
}