export class EditPopup {
    name
    $container
    $modal
    $modal_content
    $modal_edit_menu
    $modal_edit_menu_content
    $close_button
    $accordion


    blocks
    //editor-edit-popup-container
    constructor(name, themes, $container){
        this.blocks = {'General':themes.Blocks.General, "Specific": themes.Blocks.Specific};
        this.name = name;
        this.$container = $container;

        this.Render($container)
    }

    Render($container){
        this.$modal = $('<div/>').addClass('modal-edit-popup').attr('id','edit-popup')
        this.$modal_content = $('<div/>').addClass('popup-navigation-menu')
        
        this.$modal_edit_menu = $('<div/>').addClass('popup-edit-menu')


        let $close_button = $('<span/>').addClass('close').html('&times;');
        $close_button.click(() => { this.Close_() });
        this.$modal_edit_menu.append($close_button);

        this.$modal_edit_menu_content = $('<div/>')
        
        
        this.$accordion = $('<div/>')
        this.$accordion.append(this.CreateAccordion(this.blocks.General,"General",this.$modal_edit_menu_content))
        this.$accordion.append(this.CreateAccordion(this.blocks.Specific,"Specific",this.$modal_edit_menu_content))

        this.$modal_edit_menu.append(this.$modal_edit_menu_content)
        this.$modal_content.append(this.$accordion)

        this.$modal.append(this.$modal_content,this.$modal_edit_menu);
        $container.append(this.$modal);
        

    }

    CreateAccordion(rootNode,name,$option_menu){
        
        if (rootNode === null){return null}
        
        let $rootAccordion = $('<button/>').addClass('accordion').html(name)
        let $rootPanel = $('<div/>').addClass("panel")
        let $options = $('<div/>')
        let reached_options = false;
        for(const key in rootNode){
            if (rootNode.hasOwnProperty(key)) {
                let $accordion;
                
                //if there is another object call recursion else u are on options
                if(typeof rootNode[key] === 'object' &&
                rootNode[key] !== null &&
                !Array.isArray(rootNode[key])){
                    $accordion = this.CreateAccordion(rootNode[key],key,$option_menu)
                }else{
                    reached_options = true;
                    $accordion = $("<div/>").addClass("edit-popup-option").html(key)
                }
                
                if(!reached_options){
                    $rootPanel.append($accordion);
                }else{
                    $options.append($accordion);
                }
                
            }
        }
        
        if(reached_options){
            $rootAccordion.click(()=>{
                
                this.Select_option($rootAccordion);
                $option_menu.empty()
                $option_menu.append($options)
                
            })
        }else{
            $rootAccordion.click(()=>{
                this.Select_accordion($rootAccordion)
                if($rootPanel.css('display')==='block'){
                    $rootPanel.css('display','none');
                    $rootAccordion.removeClass('selected-accordion')
                }else{
                    $rootPanel.css('display','block');
                    $rootAccordion.addClass('selected-accordion')
                }
            })
        }
        
        return [$rootAccordion,$rootPanel]

    }

    Open_(){
        $("div#edit-popup").css('display', 'flex');
    }

    Close_(){
        $("div#edit-popup").css('display', 'none');
            if(this.on_close != null){
                this.on_close();
        }
        if(!this.has_input) return;
        this.$input_container.val("");
    }

    Select_accordion($accordion){
        
    }

    Select_option($option){
        $('.accordion.selected-option').removeClass('selected-option')
        $option.addClass("selected-option")
        
    }
}
