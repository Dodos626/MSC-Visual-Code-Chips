export class StyleEditor {
    ThemeWhole
    ThemePart
    $container
    $self


    constructor($container,theme){
        this.$container = $container;
        this.ThemeWhole = theme;
        this.$self = $('<div/>')
        this.Render(this.$container);
    }

    Render($container){
        $container.append(this.$self)
    }

    RenderNewOptions(name,options){
        this.$self.empty()
        this.$self = $("<div/>").addClass('edit-option-title').html('<h1>'+name+'</h1>')
        for(let key in options){
            this.$self.append($('<div/>').addClass('edit-option').html(key+ " : " + options[key]))
        }
        this.Render(this.$container)
    }
}
