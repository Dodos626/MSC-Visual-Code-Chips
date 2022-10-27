export class StyleEditor {
    ThemeWhole
    ThemePart
    OptionPath
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

    RenderNewOptions(name,options,optionPath){
        this.OptionPath = optionPath;
        this.$self.empty()
        this.$self = $("<div/>").addClass('edit-option')
        let $title = $("<div/>").addClass('edit-option-title').html('<h1>'+name+'</h1>')
        let $table = $("<table/>").addClass('edit-option-table')

        for(let key in options){
            let row = $("<tr/>")
            let collumn = [$('<td/>'),$('<td/>')]
            collumn[0].append($('<label for='+key+'>').html(key))
            collumn[1].append($(this.objDispatch[key][0]).addClass(this.objDispatch[key][1]).val(this.DecideValue(options[key],key)))
            
            row.append(collumn[0],collumn[1])
            
            $table.append(row)
            
        }
        console.log(options);
        this.$self.append($title,$table)
        this.Render(this.$container)
    }

    objDispatch = {
        BackgroundColor : ["<input type=\"color\"  id=\"BackgroundColor\">","colorpicker"],
        PaddingLeft : ["<input type=\"text\" id=\"PaddingLeft\" name=\"PaddingLeft\">","popup-edit-input"],
        PaddingRight : ["<input type=\"text\" id=\"PaddingRight\" name=\"PaddingRight\">","popup-edit-input"],
        PaddingTop : ["<input type=\"text\" id=\"PaddingTop\" name=\"PaddingTop\">","popup-edit-input"],
        PaddingBottom : ["<input type=\"text\" id=\"PaddingBottom\" name=\"PaddingBottom\">","popup-edit-input"],
        BorderWidth : ["<input type=\"text\" id=\"BorderWidth\" name=\"BorderWidth\">","popup-edit-input"],
        BorderColor : ["<input type=\"color\"  id=\"BorderColor\">","colorpicker"],
        BorderRadius : ["<input type=\"text\" id=\"BorderRadius\" name=\"BorderRadius\">","popup-edit-input"],
        Width : ["<input type=\"text\" id=\"Width\" name=\"Width\">","popup-edit-input"],
        Height : ["<input type=\"text\" id=\"Height\" name=\"Height\">","popup-edit-input"],
        FontSize : ["<input type=\"text\" id=\"FontSize\" name=\"FontSize\">","popup-edit-input"],
        FontColor : ["<input type=\"color\" id=\"FontColor\" >","colorpicker"],
        Gap : ["<input type=\"text\" id=\"Gap\" name=\"Gap\">","popup-edit-input"],
    }

    
    DecideValue(val,key){
        if(key.includes('color')) return this.colorToHex(val)
        return val
    }
    
    
    colorToRGBA(color) {
        // Returns the color as an array of [r, g, b, a] -- all range from 0 - 255
        // color must be a valid canvas fillStyle. This will cover most anything
        // you'd want to use.
        // Examples:
        // colorToRGBA('red')  # [255, 0, 0, 255]
        // colorToRGBA('#f00') # [255, 0, 0, 255]
        var cvs, ctx;
        cvs = document.createElement('canvas');
        cvs.height = 1;
        cvs.width = 1;
        ctx = cvs.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        return ctx.getImageData(0, 0, 1, 1).data;
    }
    
    byteToHex(num) {
        // Turns a number (0-255) into a 2-character hex number (00-ff)
        return ('0'+num.toString(16)).slice(-2);
    }
    
    colorToHex(color) {
        // Convert any CSS color to a hex representation
        // Examples:
        // colorToHex('red')            # '#ff0000'
        // colorToHex('rgb(255, 0, 0)') # '#ff0000'
        var rgba, hex;
        rgba = colorToRGBA(color);
        hex = [0,1,2].map(
            function(idx) { return byteToHex(rgba[idx]); }
            ).join('');
        return "#"+hex;
    }

}

