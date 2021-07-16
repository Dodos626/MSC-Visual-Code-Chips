import { assert } from "./Utils/Assert.js";

export class GrammarSymbol {
    name;
    isTerminal;

    constructor(name, isTerminal){
        this.name = name, this.isTerminal = isTerminal;
    }
}

export class DefinitionRhs {
    static Types = {
        ANY_OF:     'ANY_OF',
        ALL_OFF:    'ALL_OF',
        LIST_OF:    'LIST_OF',
        Includes(type){
            return typeof type === 'string' && Object.values(this).includes(type);
        }
    };

    type;       // 'ANY_OF' || 'ALL_OF' || 'LIST_OF'
    symbols;    // AliasedGrammarSymbol[]

    constructor(type, symbols){
        this.type = type, this.symbols = symbols;
        assert(DefinitionRhs.Types.Includes(type), `A language definition has an incorrect type ${type}`);
        assert(typeof symbols === 'object', `A language definition has content of wrong type "${typeof symbols}"`);
    }
}

export class AliasedGrammarSymbol {
    symbol; // GrammarSymbol
    alias;  // string
    textViewOnly; // bool
    tooltip; // string

    constructor(symbol, alias, textViewOnly, tooltip){
        this.symbol = symbol, this.alias = alias;
        this.tooltip = tooltip;
        this.textViewOnly = !!textViewOnly;
    }

    Clone(){
        return new AliasedGrammarSymbol(
            this.symbol,
            this.alias,
            this.textViewOnly,
            this.tooltip
        );
    }

    static FromJson(symbolJson){
        return new AliasedGrammarSymbol(
            new GrammarSymbol(
                symbolJson.symbol.name,
                symbolJson.symbol.isTerminal
            ),
            symbolJson.alias,
            symbolJson.textViewOnly,
            symbolJson.tooltip
        );
    }
}

export class Language {
    terminals = [];                     // GrammarSymbol[]
    nonTerminals = [];                  // GrammarSymbol[]
    defs = new Map;                     // Map<GrammarSymbol, RhsItem[]>
    
    static TerminalType = {
        Static:         "STATIC",
        Int:            "INT",
        Bool:           "BOOL",
        Char:           "CHAR",
        String:         "STRING",
        Float:          "FLOAT",
        Identifier:     "IDENTIFIER",
        Includes(type){
            return typeof type === 'string' && Object.values(this).includes(type);
        }
    };

    terminalTypes = new Map;            // Map<GrammarSymbol, string>

    GetSymbol(str){
        return this.GetTerminal(str) || this.GetNonTerminal(str);
    }

    GetTerminal(str){
        return this.terminals.find(sym => sym.name === str);
    }

    GetNonTerminal(str){
        return this.nonTerminals.find(sym => sym.name === str);
    }

    GetDefinition(symbol){
        if (typeof symbol === 'string')
            symbol = this.GetSymbol(symbol);
        
        if (!symbol)
            return undefined;
                
        return this.defs.get(symbol);
    }

    NewSymbol(name, isTerminal){
        return isTerminal ? this.NewTerminal(name) : this.NewNonTerminal(name);
    }

    NewTerminal(name){
        if (this.GetSymbol(name))
            return undefined;

        let terminal = new GrammarSymbol(name, true);
        this.terminals.push(terminal);

        return terminal;
    }

    NewNonTerminal(name){
        if (this.GetSymbol(name))
            return undefined;

        let nonTerminal = new GrammarSymbol(name, false);
        this.nonTerminals.push(nonTerminal);

        return nonTerminal;
    }

    SetSymbolDefinition(symbol, definition){
        if (typeof symbol === 'string')
            symbol = this.GetSymbol(symbol);

        if ( !symbol || symbol.isTerminal || !this.nonTerminals.find(sym => sym === symbol) )
            return false;

        this.defs.set(symbol, definition);
    }

    SetTerminalType(symbol, type){
        if (typeof symbol === 'string')
            symbol = this.GetSymbol(symbol);

        if ( !symbol || !symbol.isTerminal || !this.terminals.find(sym => sym === symbol) )
            return false;

        this.terminalTypes.set(symbol, type);
    }

    GetTerminalType(symbol){
        if (typeof symbol === 'string')
            symbol = this.GetSymbol(symbol);

        if ( !symbol || !symbol.isTerminal || !this.terminals.find(sym => sym === symbol) )
            return false;

        let type = this.terminalTypes.get(symbol);
        return type || Language.TerminalType.Static;
    }

    static FromJson(languageJson){
        let lang = new Language;

        if (!languageJson.definitions || !languageJson.terminalTypes){
            assert(false, 'Incorrect json format for converting into Langauge');
            return undefined;
        }

        for (let definition of languageJson.definitions){
            if (!definition.name || !(definition.list_of || definition.all_of || definition.any_of) ){
                assert(false, 'A definition misses a lhs or a rhs');
                return undefined;
            }

            let lhs = lang.GetSymbol(definition.name) || lang.NewNonTerminal(definition.name);

            if (lhs.isTerminal){
                assert(false, `Symbol "${definition.name}" exists as a terminal`);
                return undefined;
            }

            let rhsSymbols = (definition.list_of || definition.all_of || definition.any_of)
                .map(symJson => new AliasedGrammarSymbol(
                                    lang.GetSymbol(symJson.name) || lang.NewSymbol(symJson.name, symJson.type === 'terminal'),
                                    symJson.alias,
                                    symJson.textViewOnly,
                                    symJson.tooltip
                                )
                );

            let rhs = new DefinitionRhs(
                definition.list_of ? DefinitionRhs.Types.LIST_OF :
                        definition.all_of ? DefinitionRhs.Types.ALL_OFF :
                        definition.any_of ? DefinitionRhs.Types.ANY_OF :
                        null, 
                rhsSymbols
            );

            lang.SetSymbolDefinition(lhs, rhs);
        }

        for (let t of languageJson.terminalTypes){
            let symbol = lang.GetTerminal(t.name);
            if (!symbol){
                assert(false, `Trying to set type for terminal "${t.name}" but no such terminal exists`);
                return undefined;
            }
            if (!Language.TerminalType.Includes(t.type)){
                assert(false, `Terminal type "${t.type}" does not exist`);
                return undefined;
            }
            lang.SetTerminalType(symbol, t.type);
        }

        return lang;
    }
}