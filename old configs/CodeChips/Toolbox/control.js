export default  {
    "name": "Control",
    "icon": "./Images/Toolbox/control.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "if_stmt",
                    "isTerminal": false
                },
                "tooltip": "Do something if a condition is true"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IF",
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
                        "alias": "condition_expr"
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
                        },
                        "alias": "if_part"
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
                "selectedSymbol": 0,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "if_else_stmt",
                    "isTerminal": false
                },
                "tooltip": "Do something if a condition is true, else do something else"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IF",
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
                        "alias": "condition_expr"
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
                        },
                        "alias": "if_part"
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
                },
                {
                    "type": "NewLine"
                },
                {
                    "symbol": {
                        "symbol": {
                            "name": "ELSE",
                            "isTerminal": true
                        }
                    },
                    "type": "SimpleBlock"
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
                        },
                        "alias": "else_part"
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
                "selectedSymbol": 1,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "while_stmt",
                    "isTerminal": false
                },
                "tooltip": "Do something while a condition is true"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "WHILE",
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
                        "alias": "condition_expr"
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
                        },
                        "alias": "while_part"
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
                "selectedSymbol": 2,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "for_stmt",
                    "isTerminal": false
                },
                "tooltip": "Do something while a condition is true. Commonly used with a known number of iterations."
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "FOR",
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
                        "alias": "initialization_expr"
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
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "condition_expr"
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
                            "name": "expr",
                            "isTerminal": false
                        },
                        "alias": "step_expr"
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
                        },
                        "alias": "for_part"
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
                "selectedSymbol": 3,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "BREAK",
                    "isTerminal": true
                }
            },
            "type": "SimpleBlock",
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
                            "name": "break_stmt",
                            "isTerminal": false
                        },
                        "tooltip": "Exit from the current loop"
                    },
                    {
                        "symbol": {
                            "name": "continue_stmt",
                            "isTerminal": false
                        },
                        "tooltip": "Continue to the next iteration of the current loop"
                    }
                ],
                "selectedSymbol": 6,
                "type": "SelectionBlock"
            }
        },
        {
            "symbol": {
                "symbol": {
                    "name": "CONTINUE",
                    "isTerminal": true
                }
            },
            "type": "SimpleBlock",
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
                            "name": "break_stmt",
                            "isTerminal": false
                        },
                        "tooltip": "Exit from the current loop"
                    },
                    {
                        "symbol": {
                            "name": "continue_stmt",
                            "isTerminal": false
                        },
                        "tooltip": "Continue to the next iteration of the current loop"
                    }
                ],
                "selectedSymbol": 7,
                "type": "SelectionBlock"
            }
        }
    ]
}