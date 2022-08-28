import { assert } from "../../../Utils/Assert.js";
import { ToolboxCommand } from "./ToolboxCommand.js";

export class MoveCategoryCommand extends ToolboxCommand {
  Category;
  Init_Index;
  Resulting_Index;
  
  /**
     * 
     * @param {[{text: string, icon: string, color: string, canRemove: boolean }]} Category 
     * @param Move -1 = move up, 1 = move down
     */
  constructor(toolbox,  Category, Move){
      super(toolbox);
      this.Category = Category;
      this.Init_Index = this.toolbox.FindIndexCategory(Category.text);
      this.Resulting_Index = this.Init_Index + Move;
      this.blocks = this.toolbox.blocks[this.Init_Index]
      
  }

  Execute(){
    this.toolbox.DeleteCategory(this.Category.text);
    this.toolbox.UndoDeleteCategory(this.Category,this.blocks,this.Resulting_Index);
  }

  Undo(){
    this.toolbox.DeleteCategory(this.Category.text);
    this.toolbox.UndoDeleteCategory(this.Category,this.blocks,this.Init_Index);
  }

  Redo(){
      this.Execute();
  }

}