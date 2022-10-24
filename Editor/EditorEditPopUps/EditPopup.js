export class EditPopup {
    name
    $container
    $modal
    $modal_content
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
        this.$modal = $('<div/>').addClass('modal').attr('id','edit-popup')
        this.$modal_content = $('<div/>').addClass('modal-content')
        
        let $close_button = $('<span/>').addClass('close').html('&times;');
        $close_button.click(() => { this.Close_() });
        this.$modal_content.append($close_button);

        
        
        this.$accordion = this.CreateAccordion(this.blocks.General,this.$accordion,"General")
        this.$accordion.append(this.CreateAccordion(this.blocks.Specific,this.$accordion,"Specific"))
        this.$modal_content.append(this.$accordion)

        this.$modal.append(this.$modal_content);
        $container.append(this.$modal);
        

    }

    CreateAccordion(rootNode,$container,name){
        
        if (rootNode === null){return null}
        $container = $('<div/>')
        let $rootAccordion = $('<button/>').addClass('accordion').html(name)
        let $rootPanel = $('<div/>').addClass("panel")
        
        for(const key in rootNode){
            if (rootNode.hasOwnProperty(key)) {
                let $accordion;
                if(typeof rootNode[key] === 'object' &&
                rootNode[key] !== null &&
                !Array.isArray(rootNode[key])){
                    $accordion = this.CreateAccordion(rootNode[key],$container,key)
                }else{
                    $accordion = $("<div/>").addClass("edit-popup-option").html(key)
                }
                //let $accordion = $('<button/>').addClass('accordion').html(key)
                
                if($accordion==null){
                    //edw eimaste sta options
                    $accordion = $('<div/>').addClass("options-edit")
                }
                $rootPanel.append($accordion);
            }
        }

        $rootAccordion.click(()=>{
            if($rootPanel.css('display')==='block'){
                $rootPanel.css('display','none');
            }else{
                $rootPanel.css('display','block');
            }
        })
        $container.append($rootAccordion,$rootPanel);
        return $container

    }

    Open_(){
        $("div#edit-popup").css('display', 'block');
    }

    Close_(){
        $("div#edit-popup").css('display', 'none');
            if(this.on_close != null){
                this.on_close();
        }
        if(!this.has_input) return;
        this.$input_container.val("");
    }
}
