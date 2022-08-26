import { assert } from "../../../Utils/Assert.js";
import { ToolboxCommand } from "./ToolboxCommand.js";

export class DeleteCategoryCommand extends ToolboxCommand {
  Category;
  Index;
  

  constructor(toolbox,  Category){
      super(toolbox);
      this.Category = Category;
      this.Index = this.toolbox.FindIndexCategory(Category.text);
  }

  Execute(){
    this.toolbox.DeleteCategory(this.Category.text);
  }

  Undo(){
      let obj = {name: this.Category.text, icon: this.Category.icon,blocks:[]}
      this.toolbox.AddCategoryAtIndex(obj, this.Index);
  }

  Redo(){
      this.Execute();
  }

}