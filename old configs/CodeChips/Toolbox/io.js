export default {
    "name": "I/O",
    "icon": "./Images/Toolbox/io.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "input_output_print",
                    "isTerminal": false
                },
                "alias": "print",
                "tooltip": "Print the value of the given expression (text, number etc.) "
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
                            "name": "print",
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
                    "type": "RepetitionGroup"
                }
            ],
            "type": "Group",
            "generatedBy": {
                "symbol": {
                    "symbol": {
                        "name": "input_output_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in input/output function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_print",
                            "isTerminal": false
                        },
                        "alias": "print",
                        "tooltip": "Print the value of the given expression (text, number etc.) "
                    },
                    {
                        "symbol": {
                            "name": "input_output_input",
                            "isTerminal": false
                        },
                        "alias": "input",
                        "tooltip": "Prompt the user with a text message and get user-input"
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
                    "name": "input_output_input",
                    "isTerminal": false
                },
                "alias": "input",
                "tooltip": "Prompt the user with a text message and get user-input"
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
                            "name": "input",
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
                        "alias": "prompt_message"
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
                        "name": "input_output_call",
                        "isTerminal": false
                    },
                    "tooltip": "Use a built-in input/output function"
                },
                "alternateSymbols": [
                    {
                        "symbol": {
                            "name": "input_output_print",
                            "isTerminal": false
                        },
                        "alias": "print",
                        "tooltip": "Print the value of the given expression (text, number etc.) "
                    },
                    {
                        "symbol": {
                            "name": "input_output_input",
                            "isTerminal": false
                        },
                        "alias": "input",
                        "tooltip": "Prompt the user with a text message and get user-input"
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