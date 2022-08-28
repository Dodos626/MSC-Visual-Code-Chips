import { assert } from "../../../Utils/Assert.js";
import { ToolboxCommand } from "./ToolboxCommand.js";

export class NewCategoryCommand extends ToolboxCommand {
  NewCategory;
  Index;
  blocks;

  constructor(toolbox,  NewCategory){
      super(toolbox);
      this.NewCategory = NewCategory;
      this.Index = this.toolbox.categories.length
  }

  Execute(){
    this.toolbox.UpdateCategories(this.NewCategory);
  }

  Undo(){
      this.toolbox.DeleteCategory(this.NewCategory.name);
  }

  Redo(){
      this.Execute();
  }

}