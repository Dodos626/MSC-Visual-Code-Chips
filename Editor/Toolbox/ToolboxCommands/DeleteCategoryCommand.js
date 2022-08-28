import { assert } from "../../../Utils/Assert.js";
import { ToolboxCommand } from "./ToolboxCommand.js";

export class DeleteCategoryCommand extends ToolboxCommand {
  Category;
  Index;
  blocks;
  
  /**
     * 
     * @param {[{text: string, icon: string, color: string, canRemove: boolean }]} Category 
     */
  constructor(toolbox,  Category){
      super(toolbox);
      this.Category = Category;
      this.Index = this.toolbox.FindIndexCategory(Category.text);
      this.blocks = this.toolbox.blocks[this.Index]
      console.log(this.blocks, this.Category)
  }

  Execute(){
    this.toolbox.DeleteCategory(this.Category.text);
  }

  Undo(){
      this.toolbox.UndoDeleteCategory(this.Category,this.blocks,this.Index);
  }

  Redo(){
      this.Execute();
  }

}