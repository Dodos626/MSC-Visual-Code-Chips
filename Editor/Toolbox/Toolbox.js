import { assert } from "../../Utils/Assert.js";
import { EditorElement, EditorElementTypes } from "../EditorElements/EditorElement.js";
import { MenuCategory } from "./MenuCategory.js";
import { EditorElementParser } from "../EditorElements/EditorElementParser.js"
import { ContainerResizer } from"../../Utils/ContainerResizer.js"
import { KeyboardEventManager } from "../../Utils/KeyboardEventManager.js";
import { CommandHistory } from "../../Utils/Command.js";
import { DeleteCommand } from "./ToolboxCommands/DeleteCommand.js";
import { InsertCommand } from "./ToolboxCommands/InsertCommand.js";
import { MoveCommand } from "./ToolboxCommands/MoveCommand.js";
import { ApplyCssToStyle, Themeable, ThemeableProps } from "../Theme.js";
import { ContextMenu } from "../ContextMenu.js";

export class Toolbox {
    categories = [];
    blocks = {};
    $scrollTargets = {};

    ContextMenuTheme;
    ContextMenuHandlers = [];

    selected;

    $container;
    $toolbox;
    $toolboxMenu;
    $toolboxBlocks;

    autoScrolling = false;

    $contextMenuContainer;

    onDragStart = (e, block) => {};
    onDragEnd = (e, block) => {};
    onDrop = (e, block) => {};

    draggedBlock;
    draggedBlockCategoryName;

    keyboardEventManager;
    history;
    containerResizer;
    maxWidth;
    minWidth;

    theme;

    blockTheme = () => { return {}; };

    static themeableIds = {
        ToolboxMenu: 'Toolbox Menu',
        ToolboxMenuIcon: 'Toolbox Menu Icon',
        ToolboxMenuSelectedIcon: 'Toolbox Menu Selected Icon',
        ToolboxMenuLabel: 'Toolbox Menu Label',
        ToolboxMenuSelectedLabel: 'Toolbox Menu Selected Label',
        ToolboxMenuSelectedTag: 'Selected Tag',
        Toolbox: 'Toolbox',
        BlockCategoryTitle: 'Block Category Title',
        BlockCategoryOnDropHover: 'Block Category On Drop Hover',
        BlockCategoryOnDropPlaceholder: 'Block Category On Drop Placeholder',
        BlockDeleteButtonContainer: 'Block Delete Button Container',
        BlockDeleteButtonX: 'Block Delete Button X',
        Scrollbar: 'Scrollbar',
        ScrollbarThumb: 'Scrollbar Thumb',
        ScrollbarThumbOnHover: 'Scrollbar Thumb On Hover',
        ScrollbarTrack: 'Scrollbar Track',
    };

    static themeables = [
        {
            id: Toolbox.themeableIds.ToolboxMenu,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
                ThemeableProps.Props.PaddingLeft,
                ThemeableProps.Props.PaddingRight,
                ThemeableProps.Props.PaddingTop,
                ThemeableProps.Props.PaddingBottom,
            ),
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuIcon,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
                ThemeableProps.Props.Width,
                ThemeableProps.Props.Height,
            ),
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedIcon,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuLabel,
            themeable: new Themeable(
                ThemeableProps.Props.FontColor,
                ThemeableProps.Props.FontSize,
            ),
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedLabel,
            themeable: new Themeable(
                ThemeableProps.Props.FontColor,
            ),
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedTag,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.Toolbox,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.BlockCategoryTitle,
            themeable: new Themeable(
                ThemeableProps.Props.FontSize,
                ThemeableProps.Props.FontColor,
            ),
        },
        {
            id: Toolbox.themeableIds.BlockCategoryOnDropHover,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.BlockCategoryOnDropPlaceholder,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.BlockDeleteButtonContainer,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.BlockDeleteButtonX,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.Scrollbar,
            themeable: new Themeable(
                ThemeableProps.Props.Width,
                ThemeableProps.Props.Height,
            ),
        },
        {
            id: Toolbox.themeableIds.ScrollbarThumb,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
                ThemeableProps.Props.BorderRadius,
            ),
        },
        {
            id: Toolbox.themeableIds.ScrollbarThumbOnHover,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
            ),
        },
        {
            id: Toolbox.themeableIds.ScrollbarTrack,
            themeable: new Themeable(
                ThemeableProps.Props.BackgroundColor,
                ThemeableProps.Props.BorderWidth,
                ThemeableProps.Props.BorderColor,
            ),
        },
    ];

    customizableViews = [
        {
            id: Toolbox.themeableIds.ToolboxMenu,
            GetView: () => { return this.$toolboxMenu; }
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuIcon,
            GetView: () => { return this.$toolboxMenu.find('.menu-category .icon'); }
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedIcon,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-selected-icon`,
                    [`#${this.id} .menu-category.selected .icon`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuLabel,
            GetView: () => { return this.$toolboxMenu.find('.menu-category .text'); }
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedLabel,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-selected-label`,
                    [`#${this.id} .menu-category.selected .text`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.ToolboxMenuSelectedTag,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-selected-tag`,
                    [`#${this.id} .menu-category.selected + .selected-line`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.Toolbox,
            GetView: () => { return this.$toolboxBlocks; }
        },
        {
            id: Toolbox.themeableIds.BlockCategoryTitle,
            GetView: () => { return this.$toolboxBlocks.find('.category-name'); }
        },
        {
            id: Toolbox.themeableIds.BlockCategoryOnDropHover,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-droparea`,
                    [`#${this.id} .toolbox-blocks .category-blocks.droparea`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.BlockCategoryOnDropPlaceholder,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-drop-indicator`,
                    [`#${this.id} .toolbox-blocks .category-blocks .drop-indicator`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.BlockDeleteButtonContainer,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-delete-button`,
                    [`#${this.id} .category-blocks .category-block .delete-button`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.BlockDeleteButtonX,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-delete-button-x`,
                    [`#${this.id} .category-blocks .category-block .delete-button .icon`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.Scrollbar,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-scrollbar`,
                    [`#${this.id} *::-webkit-scrollbar`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.ScrollbarThumb,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-scrollbar-thumb`,
                    [`#${this.id} *::-webkit-scrollbar-thumb`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.ScrollbarThumbOnHover,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-scrollbar-thumb-hover`,
                    [`#${this.id} *::-webkit-scrollbar-thumb:hover`],
                    [theme.ToCss()]
                )
            },
        },
        {
            id: Toolbox.themeableIds.ScrollbarTrack,
            ApplyTheme: (theme) => {
                ApplyCssToStyle(
                    `${this.id}-scrollbar-track`,
                    [`#${this.id} *::-webkit-scrollbar-track`],
                    [theme.ToCss()]
                )
            },
        },
    ];

    static currId = 0;
    id;

    /**
     * 
     * @param {[{name: string, icon: string, blocks: [EditorElement]}]} categories 
     */
    constructor($container, categories,  ContextMenuTheme,
        ContextMenuHandlers, theme) {
        assert($container);
        
        this.ContextMenuHandlers = ContextMenuHandlers;
        this.ContextMenuTheme = ContextMenuTheme;
        
        // categories.push({name:"My Blocks", icon:"", blocks:[]});
        this.id = 'toolbox' + Toolbox.currId++;


        for(let i=0; i < categories.length ; i++){
            this.categories[i] = (new MenuCategory(categories[i].name,categories[i].icon, '#A5A5A5'));
            this.categories[i].canRemove = false;
            this.blocks[i] = categories[i].blocks.map(blockJson => {
                let b = EditorElementParser.FromJson( blockJson, block => this.BindElem(block) );
                this.SetBlockDragEvents(categories[i].name, b);
                //original grammar blocks cannot be removed
                b.canRemove=false;
                return b;
            })
            
        }

        // for (let category of categories){
        //     this.categories[category.name] = (new MenuCategory(category.name, category.icon, '#A5A5A5'));
        //     this.blocks[category.name] = category.blocks.map(blockJson => {
        //         let b = EditorElementParser.FromJson( blockJson, block => this.BindElem(block) );
        //         this.SetBlockDragEvents(category.name, b);
        //         return b;
        //     });
        // }

        this.$container = $container;
        
        this.theme = theme;
        
        this.SetElem_Theme((elem) => {
            if (elem.GetType() === EditorElementTypes.NewLine || elem.GetType() === EditorElementTypes.Tab){
                return {};
            }
            return this.theme?.["Blocks"]["Composite"][elem.GetSymbol().symbol.name];
        });

        this.history = new CommandHistory();
        
        this.InitializeView_();
        this.SetUpKeyboardEvents_();
        
        this.Render();
        this.CloseContextMenu();
        this.Select_(this.categories[0]);
        // console.log(categories);
        // console.log(this.categories)
        // console.log(this.blocks)
    }
    
    static FromJson($container, toolboxJson){
        return new Toolbox($container, toolboxJson);
    }

    SetUpKeyboardEvents_(){
        const Keys = KeyboardEventManager.Keys;
        
        this.keyboardEventManager = new KeyboardEventManager(this.$toolbox)
            .AddEventHandler([Keys.CTRL, Keys.Z], e => this.EventHandler_Undo_(e))
            .AddEventHandler([Keys.CTRL, Keys.Y], e=> this.EventHandler_Redo_(e))
            .AddEventHandler([Keys.CTRL, Keys.P], e => {
                e.preventDefault();
                e.stopPropagation();
                console.log(this.ToJson())
            })
        ;
    }

    ToJson(){
        let toolboxJson = [];

        for (let i=0; i < this.categories.length ; i++){
            toolboxJson.push(
                {
                    name: this.categories[i].text,
                    icon: this.categories[i].GetIcon(),
                    blocks: this.categories[i].map(block=> block.ToJsonRec())
                }
            );
        }

        // for (let categoryName in this.categories)
        //     toolboxJson.push(
        //         {
        //             name:   categoryName,
        //             icon:   this.categories[categoryName].GetIcon(),
        //             blocks: this.blocks[categoryName].map(block => block.ToJsonRec())
        //         }
        //     );

        return toolboxJson;
    }

    InitializeView_(){
        this.$toolbox = $('<div/>').addClass('toolbox').attr('id', this.id);
        this.$toolboxMenu = $('<div/>').addClass('toolbox-menu');
        
        this.$toolboxBlocks = $('<div/>').addClass('toolbox-blocks');
        this.$toolboxBlocksContainer = $('<div/>');
        this.$toolboxBlocksContainer.append(this.$toolboxBlocks);
        this.$contextMenuContainer = $('<div/>').addClass('editor-context-menu-container')
        
        this.$toolbox.append(this.$toolboxMenu);
        this.$toolbox.append(this.$toolboxBlocksContainer, this.$contextMenuContainer);
        this.$container.append(this.$toolbox);
        
        this.MakeBlockContainerResizable_();
        this.SetupMenuSelectionOnScroll();
    }

    MakeBlockContainerResizable_(){
        let containerResizer = new ContainerResizer(this.$toolboxBlocksContainer);
        containerResizer.MakeResizable();
        containerResizer.SetMaxWidth(() => {
            if (this.maxWidth){
                let max = this.maxWidth() - this.$toolboxMenu.width();
                assert(max > 0);
                return max;
            }else
                Number.POSITIVE_INFINITY;
        });
        containerResizer.SetMinWidth(() => {
            if (this.minWidth){
                let min = this.minWidth() - this.$toolboxMenu.width();
                assert(min);
                return min;
            }else
                Number.NEGATIVE_INFINITY;
        });
    }

    SetupMenuSelectionOnScroll() {
        this.$toolboxBlocks.on('scroll', () => {
            if (!this.autoScrolling){
                let scrollTop = this.$toolboxBlocks.scrollTop();
                let offsetTop = this.$toolboxBlocks.offset().top;
                
                let closestCategory, min;
                for (let category in this.$scrollTargets){
                    let categoryY = this.$scrollTargets[category].offset().top + scrollTop - offsetTop - 20;
                    let offset = Math.ceil(scrollTop - categoryY);
                    if (min === undefined || (offset >= 0 && offset < min)){
                        closestCategory = category;
                        min = offset;
                    }
                }
                this.Select_(this.categories[closestCategory]);
            }
        });
    }

    RenderToolboxMenu(){
        for (let categoryIndex in this.categories) {
            
            let category = this.categories[categoryIndex];

            let $categoryContainer = $('<div/>').addClass('category-container');
            category.Render($categoryContainer);

            this.$toolboxMenu.append($categoryContainer);

            category.GetView().on('click', () => {
                if (this.selected === category){
                    this.Select_(undefined);
                    this.$toolboxBlocksContainer.hide();
                }else{
                    this.$toolboxBlocksContainer.show();
                    this.Select_(category);
                    this.autoScrolling = true;
                    this.$toolboxBlocks.animate(
                        {
                            scrollTop: this.$scrollTargets[categoryIndex].offset().top 
                                        + this.$toolboxBlocks.scrollTop() 
                                        - this.$toolboxBlocks.offset().top
                                        - 20
                        }, 
                        400, 
                        () => {
                            this.autoScrolling = false;
                        }
                    )
                }
            });
        }
        
    }

    RenderAllBlocks(){
        let scrollTop = this.$toolboxBlocks.scrollTop();

        this.$toolboxBlocks.empty();
        
        for (let categoryName in this.blocks){
            this.RenderCategoryBlocks_(categoryName);
        }

        this.$toolboxBlocks.append($('<div/>').addClass('fill'));

        this.$toolboxBlocks.scrollTop(scrollTop);

        this.ApplyTheme();
    }

    // NEW CODE
    UpdateCategories(category){
        
        // creates the menu category and puts it in the categories
        
        this.categories.push((new MenuCategory(category.name, category.icon, '#A5A5A5')))  
        let last_index = this.categories.length - 1 ;
        this.categories[last_index].canRemove = true;
        // maps the blocks and renders them
        this.blocks[last_index] = category.blocks.map(blockJson => {
            let b = EditorElementParser.FromJson( blockJson, block => this.BindElem(block) );
            this.SetBlockDragEvents(category.name, b);
            return b;
        });

        // renders the new category
        this.$toolboxMenu.empty();
        this.Render();
        this.ApplyTheme();
        this.Select_(this.categories[0]);
        console.log(this.categories)
    }

    DeleteCategory(categoryName){
        let index = this.FindIndexCategory(categoryName);
        assert(index != -1, "didnt found category for deletion");
        for(let i = index+1 ; i < this.categories.length ; i++){
            this.blocks[i-1] = this.blocks[i]
        }
        delete this.blocks[this.categories.length-1];
        this.categories.splice(index,1)
        this.$toolboxMenu.empty();
        this.Render();
        this.ApplyTheme();
        this.Select_(this.categories[0]);
    }

    UndoDeleteCategory(category,blocks,index){
        for (let i = this.categories.length ; i > index ; i--){
            this.blocks[i] = this.blocks[i-1];
        }
        this.categories.splice(index, 0,  category);
        this.blocks[index] = blocks;
        this.$toolboxMenu.empty();
        this.Render();
        this.ApplyTheme();
        this.categories[index].GetView().click()
    }

    FindIndexCategory(categoryName){
        return this.categories.map((obj) =>{return obj.text }).indexOf(categoryName);
    }

    Render() {
        this.RenderToolboxMenu();
        this.RenderAllBlocks();
        this.SetupContextMenu();
    }

    RenderBlock(block, $category, categoryName){
        let $wrapper = $('<div/>').addClass('category-block');
        
        block.Render($wrapper);

        if(block.canRemove !== false){
            let $deleteButton = $('<div/>').addClass('delete-button')
            .append( $('<div/>').addClass('icon') );

            $wrapper.on('mouseenter', () => {
                $deleteButton.css('visibility', 'visible');
            });
    
            $wrapper.on('mouseleave', () => {
                $deleteButton.css('visibility', 'hidden');
            });
    
            
            $deleteButton.on('click', () => {
                this.history.ExecuteAndAppend( new DeleteCommand(this, block, categoryName) );
            });

            $wrapper.append($deleteButton);
        }
        

        

        
        $category.append($wrapper);
    
        
    }

    RemoveBlock(block, categoryName){
        let blocks = this.blocks[categoryName];
        let index = blocks.indexOf(block);
        assert(index !== -1);
        blocks.splice(index, 1);
    }

    RenderCategoryBlocks_(categoryName){
        let $wholeCategory = $('<div/>').addClass('category');
        let $scrollTarget = $('<div/>').html(this.categories[categoryName].text).addClass('category-name');
        let $categoryBlocks = $('<div/>').addClass('category-blocks');
                    
        let blocks = this.blocks[categoryName];
        for (let b of blocks){
            this.RenderBlock(b, $categoryBlocks, categoryName);
        }

        $wholeCategory.append($scrollTarget, $categoryBlocks);
        this.$toolboxBlocks.append($wholeCategory);

        this.$scrollTargets[categoryName] = $scrollTarget;
        
        this.SetUpDropEvents_(categoryName, $categoryBlocks);
    }

    SetUpDropEvents_(categoryName, $blocks){
        let blocks = this.blocks[categoryName];
        let $dropIndicator = $('<div/>').addClass('drop-indicator');

        let counter = 0;

        $blocks.on('dragenter', (e) => {
            e.preventDefault();
            $blocks.addClass('droparea');
            counter++;
        });

        $blocks.on('dragleave', (e) => {
            if (--counter === 0){
                $dropIndicator.remove();
                $blocks.removeClass('droparea');
            }
        });

        let indexFromDrop;

        $blocks.on('dragover', (e) => {
            e.preventDefault();

            indexFromDrop = blocks.length;
            let minOffset, $minOffsetBlockView;

            for (let i = 0; i < blocks.length; i++){
                let b = blocks[i];

                let offset = b.GetWholeView().offset().top + b.GetWholeView().height() / 2 - e.pageY;
                if ( (minOffset === undefined && offset >= 0) || (offset !== undefined && offset < minOffset && offset >= 0) ){
                    minOffset = offset;
                    $minOffsetBlockView = b.GetWholeView();
                    indexFromDrop = i;
                }
            }

            minOffset !== undefined ? $minOffsetBlockView.before($dropIndicator) : $blocks.append($dropIndicator);
        });

        $blocks.on('drop', (e) => {
            let blockStr = e.originalEvent.dataTransfer.getData('block');
            if (!blockStr)  return;

            let block = this.draggedBlock || EditorElementParser.FromString( blockStr, block => this.BindElem(block) );

            if (!this.draggedBlock)
                this.history.ExecuteAndAppend( new InsertCommand(this, block, categoryName, indexFromDrop) );
            else{
                
                if (this.draggedBlockCategoryName === categoryName && indexFromDrop > blocks.indexOf(block))
                    indexFromDrop--;

                this.history.ExecuteAndAppend(
                    new MoveCommand( this, block, this.draggedBlockCategoryName, categoryName, indexFromDrop)
                );

                this.draggedBlock = this.draggedBlockCategoryName = undefined;
            }
            
            this.onDrop(e, block);
        });
    }

    BindElem(block){
        block.SetTheme(elem => this.blockTheme(elem));

        if (
            block.GetType() === EditorElementTypes.InputBlock ||
            block.GetType() === EditorElementTypes.SelectionBlock ||
            block.GetType() === EditorElementTypes.RepetitionGroup
        ){
            block.SetEditable(false);
        }

        block.SetDraggable(false);
        block.SetDroppable(false);
    }

    SetBlockDragEvents(categoryName, block){
        block.SetDraggable(true);

        block.SetOnDragStart((e, block) => {
            assert(this.draggedBlock == undefined);
            this.draggedBlock = block, this.draggedBlockCategoryName = categoryName;

            this.$toolboxBlocks.find('.delete-button').css('visibility', 'hidden');
            
            this.onDragStart(e, block);
        });

        block.SetOnDragEnd((e, block) => {
            assert(this.draggedBlock);
            this.draggedBlock = this.draggedBlockCategoryName = undefined;

            this.onDragEnd(e, block);
        });
    }

    Select_(category){
        this.selected?.GetView()?.removeClass('selected');
        category?.GetView()?.addClass('selected');

        this.selected?.GetView()?.siblings().remove('.selected-line');
        category?.GetView()?.parent().append($('<div/>').addClass('selected-line'));

        this.selected = category;
        //while scrolling into the blocks in the toolbox
        //scrolls to the category in the menu that is selected
        category?.GetView()[0]?.scrollIntoView({block:"end"})
    }

    CreateThemeStructure(){
        let theme = {};

        for (let themable of Toolbox.themeables){
            theme[themable.id] = {};

            for (let prop of themable.themeable.props)
                theme[themable.id][prop] = '';
        }

        return theme;
    }

    ApplyTheme(themes){
        themes ? this.theme = themes : themes = this.theme;
        if (!themes) return;

        this.customizableViews.forEach((view) => {
            let theme = themes[view.id];
            if (!theme) return;
            
            (view.ApplyTheme) ? view.ApplyTheme(theme): view.GetView().css(theme.ToCss());
        });

        for (let categoryName in this.blocks) {
            for (let block of this.blocks[categoryName]){
                if (block.GetType() === EditorElementTypes.Group || block.GetType() === EditorElementTypes.RepetitionGroup){
                    block.ForEachRec((block) => block.ApplyThemes_());
                }else
                    block.ApplyThemes_()
            }
        }
    }

    SetElem_OnDragStart(f){
        this.onDragStart = f;
    }

    SetElem_OnDragEnd(f){
        this.onDragEnd = f;
    }

    SetElem_Theme(f){
        this.blockTheme = f;
    }

    SetToolbox_OnDrop(f){
        this.onDrop = f;
    }

    SetToolbox_MaxWidth(f){
        this.maxWidth = f;
    }

    SetToolbox_MinWidth(f){
        this.minWidth = f;
    }

    EventHandler_Undo_(e){
        e.stopPropagation();
        e.preventDefault();

        this.history.Undo();
    }
    
    EventHandler_Redo_(e){
        e.stopPropagation();
        e.preventDefault();
        
        this.history.Redo();
    }

    SetupContextMenu(){
        
        this.$toolboxMenu.children('.category-container').on('contextmenu', (e) => {
            e.stopPropagation();
            e.preventDefault();
            // NA ALLAKSW TO PWS PIANW TO TEXT
            var text = e.currentTarget.children[0].lastChild.innerText;
            var index = this.FindIndexCategory(text)
            if(!this.categories[index].GetView().hasClass('selected')){
                this.categories[index].GetView().click()
            }
            
            
            this.$contextMenuContainer.empty();
            
            let contextMenu = new ContextMenu(
                this.$contextMenuContainer,[
                    [
                        {
                            name: "New",
                            shortcut: 'Ctrl+P',
                            disabled: false,
                            handler: this.ContextMenuHandlers['newCategory']
                        },
                        {
                            name: 'Delete',
                            shortcut:   'Ctrl+P+Del',
                            disabled: !this.categories[index].canRemove,
                            handler: () => {this.ContextMenuHandlers['deleteCategory'](this.categories[index])}
                        }
                    ],[
                        {
                            name: "Move Up",
                            shortcut: "",
                            disabled: index == 0,
                            handler: () => {this.ContextMenuHandlers['moveCategory'](this.categories[index],-1)}
                        },
                        {
                            name: "Move Down",
                            shortcut: "",
                            disabled: index == this.categories.length -1,
                            handler: () => {this.ContextMenuHandlers['moveCategory'](this.categories[index],1)}
                        }
                    ]
                    
                ]
            )
            contextMenu.Render();
            contextMenu.ApplyTheme(this.ContextMenuTheme)
            this.FitContextMenu_(e);
        });
    }

    FitContextMenu_(e){
        const position = e.currentTarget.getBoundingClientRect();
        let top = position.top > this.$toolbox.height() ? this.$toolbox.height() : position.top
        let left = this.$toolboxMenu.width() + position.right/2 + 10
        this.$contextMenuContainer.css('left', left);
        this.$contextMenuContainer.css('top', top);
    }

    CloseContextMenu(){
        var f = () => this.$contextMenuContainer.empty();
        document.addEventListener(
            "click",
            function(event) {
                f()
            },
            false
        )
    }

    


}