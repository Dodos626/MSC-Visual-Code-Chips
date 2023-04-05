import { StyleEditor } from "./StyleEditor.js"
export class EditPopup {

    

    name
    $container
    $modal
    $modal_content
    $modal_edit_menu
    
    $close_button
    $accordion

    StyleEditorCallbacks

    StyleEdit
    $styleEdit
    theme
    blocks
    //editor-edit-popup-container
    constructor(name, themes, $container, callbacks){
        this.name = name;
        this.$container = $container;
        this.StyleEditorCallbacks = callbacks
        this.Render($container)
    }

    Render($container){
        this.GetTheme()
        
        this.$modal = $('<div/>').addClass('modal-edit-popup').attr('id','edit-popup')
        this.$modal_content = $('<div/>').addClass('popup-navigation-menu')
        
        this.$modal_edit_menu = $('<div/>').addClass('popup-edit-menu')


        let $close_button = $('<span/>').addClass('close').html('&times;');
        $close_button.click(() => { this.Close_() });
        this.$modal_edit_menu.append($close_button);

        
        this.$accordion = $('<div/>')
        console.log(this.blocks, this.theme);
        this.$accordion.append(this.CreateAccordion(this.blocks.General,"General"))
        this.$accordion.append(this.CreateAccordion(this.blocks.Specific,"Specific"))

        this.$styleEdit = $('<div/>').addClass('StyleEditor');

        this.StyleEditorCallbacks.Close = ()=>{this.Close_()}
        this.StyleEdit = new StyleEditor(this.$styleEdit,this.theme.Blocks,this.StyleEditorCallbacks)

        this.$modal_edit_menu.append(this.$styleEdit)
        this.$modal_content.append(this.$accordion)

        this.$modal.append(this.$modal_content,this.$modal_edit_menu);
        $container.append(this.$modal);
        
    }

    GetTheme(){
        this.theme = this.StyleEditorCallbacks.GetTheme()
        this.blocks = {'General':this.theme.Blocks.General, 
                        "Specific": this.theme.Blocks.Specific, 
                    };
    }

    CreateAccordion(rootNode,name){
        
        if (rootNode === null){return null}
        
        let $rootAccordion = $('<button/>').addClass('accordion').html(name)
        let $rootPanel = $('<div/>').addClass("panel")
        let reached_options = false;
        for(const key in rootNode){
            if (rootNode.hasOwnProperty(key)) {
                let $accordion;
                
                //if there is another object call recursion else u are on options
                if(typeof rootNode[key] === 'object' &&
                rootNode[key] !== null &&
                !Array.isArray(rootNode[key])){
                    $accordion = this.CreateAccordion(rootNode[key],key)
                }else{
                    reached_options = true;
                }
                
                if(!reached_options){
                    $rootPanel.append($accordion);
                }
                
            }
        }
        if(reached_options){
            this.AssignOpenOptions(name,$rootAccordion,rootNode)
        }else{
            this.AssignOpenPanel($rootPanel,$rootAccordion)
        }
        
        return [$rootAccordion,$rootPanel]

    }

    Open_(){
        $("div#edit-popup").css('display', 'flex');

        
        let selected = $('.accordion.selected-option'); //checks if there is something selected
        if(selected.length != 0){
            selected.click() //if something is selected it clicks it to refresh it
        }
    }

    Close_(){
        $("div#edit-popup").css('display', 'none');
            if(this.on_close != null){
                this.on_close();
        }
    }

    /** @param $panel is assigned to open at press of the @button $accordion */
    AssignOpenPanel($panel,$accordion){
        $accordion.click(()=>{
            
            if($panel.css('display')==='block'){
                $panel.css('display','none');
                $accordion.removeClass('selected-accordion')
            }else{
                $panel.css('display','block');
                $accordion.addClass('selected-accordion')
            }
            
        })
    }

     /** @param $options is assigned to open at press of the @param $accordion at the @param $option_menu */
    AssignOpenOptions(selfName,$accordion,options){
        $accordion.click(()=>{
            let optionPath = this.FindPath(selfName,$accordion)
            this.StyleEdit.RenderNewOptions(selfName,options,optionPath)
            this.Select_option($accordion);
            
        })
    }

    Select_option($option){
        $('.accordion.selected-option').removeClass('selected-option')
        $option.addClass("selected-option")
        
    }

    FindPath(selfname,$accordion){
        let arr = [selfname]
        
        let parent = $accordion.parent()
        let parent_name = ""

        while(parent_name != 'General' && parent_name != 'Specific' && parent_name != 'Composite'){
            
            parent_name = parent.prev().text()
            arr.push(parent_name)
            parent = parent.parent()

        }

        return arr;

    }

    ApplyTheme(Themes){
        //console.log(Themes);
        let main_categories = ['.popup-navigation-menu','.popup-edit-menu','.panel']
        main_categories.forEach((category)=>{
            $(category).css(
                "background-color",Themes['Toolbox Menu']['theme']['BackgroundColor']
              ).css(
                  "color", Themes['Toolbox Menu Label']['theme']['FontColor']
              )
        })

        $('button.accordion').css(
            "color", Themes['Toolbox Menu Label']['theme']['FontColor']
          ).css(
            "background-color", Themes['Toolbox Menu']['theme']['BackgroundColor']
          ).css(
            "border", "solid 1px rgba(255,255,255,0.1)"
          )
        
        
    }

    ResetTheme(){
        this.StyleEdit.ResetValues();
    }

    AcceptTheme(){
        this.StyleEdit.DropValues();
    }
}
