import { EditorElementTypes } from "../EditorElements/EditorElement.js";
import { EditorCommand } from "./EditorCommand.js";

export class DeleteCommand extends EditorCommand{
    block;
    generatedBy;

    parent;
    index;

    constructor(editor, block){
        super(editor, `Delete ${
            block.GetType() === EditorElementTypes.NewLine ? 'New Line' :
            block.GetType() === EditorElementTypes.Tab ? 'Tab' :
            block.GetSymbol().alias || block.GetSymbol().symbol.name
        }`);

        this.block = block;
        this.parent = block.GetParent();
        this.index = this.parent.IndexOf(block);

        this.generatedBy = this.block.GetGeneratedBy();

        this.selected = this.editor.selected;
    }

    Execute(){
        this.editor.RemoveElem_WithChecks(this.block);
    }

    Undo(){
        if (this.generatedBy)
            this.generatedBy.GetParent().RemoveElem(this.generatedBy);
        
        this.parent.InsertAtIndex(this.index, this.block);
        this.editor.Select(this.selected);
    }

    Redo(){
        this.Execute();
    }
}