export let quickReplaceConfig= [
    {
        if_stmt:        ["if", "$$_condition", "$$_statements"],
        if_else_stmt:   [ "if", "$$_condition", "$$_statements", "else", "statements" ],
        while_stmt:     [ "while", "$$_condition", "$$_statements" ]
    },
    {
        binary_arith_expr: ["$$_expr1", "op", "$$_expr2"],
        binary_logical_expr: ["$$_expr1", "op", "$$_expr2"],
        rel_expr: ["$$_expr1", "op", "$$_expr2"]
    }
]