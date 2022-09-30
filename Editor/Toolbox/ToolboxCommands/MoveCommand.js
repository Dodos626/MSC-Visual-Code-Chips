import { assert } from "../../../Utils/Assert.js";
import { ToolboxCommand } from "./ToolboxCommand.js";
import { DeleteCommand } from "./DeleteCommand.js";
import { InsertCommand } from "./InsertCommand.js";

export class MoveCommand {
    deleteCommand;
    insertCommand;

    constructor(toolbox, block, categoryFrom, categoryTo, destIndex){
        //gia kapoio logo to categoryFrom ama kaneis
        //2 move sto idio block anti na erxete me name erxete me arithmo
        //opote to metafrazw sto name
        if(!isNaN(categoryFrom)){
            categoryFrom = toolbox.categories[categoryFrom].text
        }
        console.log(block,categoryFrom,categoryTo,destIndex);
        this.deleteCommand = new DeleteCommand(toolbox, block, categoryFrom);
        this.insertCommand = new InsertCommand(toolbox, block, categoryTo, destIndex);
    }

    Execute(){
        this.deleteCommand.Execute();
        this.insertCommand.Execute();
    }

    Undo(){
        this.insertCommand.Undo();
        this.deleteCommand.Undo();
    }

    Redo(){
        this.deleteCommand.Redo();
        this.insertCommand.Redo();
    }

}