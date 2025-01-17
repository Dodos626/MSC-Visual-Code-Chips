export default {
    "name": "Array",
    "icon": "./Images/Toolbox/array.svg",
    "blocks": [
        {
            "symbol": {
                "symbol": {
                    "name": "ARRAY_CONST",
                    "isTerminal": false
                },
                "tooltip": "An array of elements"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "ARRAY",
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
                            "name": "element_list",
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
                                "alias": "element"
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
                            "alias": "element"
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
                "selectedSymbol": 6,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                            "name": "array_get",
                            "isTerminal": false
                        },
                        "alias": "get",
                        "tooltip": "Get an element by its position in the array"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "get",
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
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
                "selectedSymbol": 3,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                            "name": "array_insert",
                            "isTerminal": false
                        },
                        "alias": "insert",
                        "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "insert",
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
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "element"
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
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
                "selectedSymbol": 3,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                            "name": "array_push_back",
                            "isTerminal": false
                        },
                        "alias": "push_back",
                        "tooltip": "Insert an element at the end of the array"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "push_back",
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
                                "alias": "element"
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
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
                "selectedSymbol": 3,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                            "name": "array_set",
                            "isTerminal": false
                        },
                        "alias": "set",
                        "tooltip": "Set (Replace) an element in a position of the array to a new character"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "set",
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
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "element"
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
                            }
                        ],
                        "selectedSymbol": 3,
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
                "selectedSymbol": 3,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                            "name": "array_set",
                            "isTerminal": false
                        },
                        "alias": "set",
                        "tooltip": "Set (Replace) an element in a position of the array to a new character"
                    },
                    "elems": [
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "set",
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
                        },
                        {
                            "symbol": {
                                "symbol": {
                                    "name": "expr",
                                    "isTerminal": false
                                },
                                "alias": "element"
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
                            }
                        ],
                        "selectedSymbol": 3,
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
                "selectedSymbol": 3,
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
                    "name": "array_method_call",
                    "isTerminal": false
                },
                "tooltip": "Use a built-in array method"
            },
            "elems": [
                {
                    "symbol": {
                        "symbol": {
                            "name": "IN ARRAY",
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
                        "alias": "array"
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
                                "name": "array_method",
                                "isTerminal": false
                            }
                        },
                        "alternateSymbols": [
                            {
                                "symbol": {
                                    "name": "array_get",
                                    "isTerminal": false
                                },
                                "alias": "get",
                                "tooltip": "Get an element by its position in the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_insert",
                                    "isTerminal": false
                                },
                                "alias": "insert",
                                "tooltip": "Insert an element at a position in the array. Elements that previously were\n                        at the position, or after it, are moved one place to the right"
                            },
                            {
                                "symbol": {
                                    "name": "array_push_back",
                                    "isTerminal": false
                                },
                                "alias": "push_back",
                                "tooltip": "Insert an element at the end of the array"
                            },
                            {
                                "symbol": {
                                    "name": "array_set",
                                    "isTerminal": false
                                },
                                "alias": "set",
                                "tooltip": "Set (Replace) an element in a position of the array to a new character"
                            },
                            {
                                "symbol": {
                                    "name": "array_size",
                                    "isTerminal": false
                                },
                                "alias": "get_size",
                                "tooltip": "Get the count of elements in the array"
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
                "selectedSymbol": 3,
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