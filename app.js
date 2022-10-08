import { CodeChips } from './CodeChips.js'
import { ToJavascriptVisitor } from './Generators/ToJavascriptVisitor.js';
import { AstHost } from './Generators/AstHost.js';
import { assert } from './Utils/Assert.js'

import {config as codeChipsConfig} from './Config/CodeChips/config.js'
import  javaClassDef from './Config/JavaClassDef/javaClassDef.json' assert {type: 'json'} //translates json to js obj automatically 

$(document).ready(function () {

    $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        var htmlText = text || this.val() || this.text();
        htmlText = $.fn.textWidth.fakeEl.text(htmlText).html(); //encode to Html
        htmlText = htmlText.replace(/\s/g, "&nbsp;"); //replace trailing and leading spaces
        $.fn.textWidth.fakeEl.html(htmlText).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
    };

    let editors = {
        'Code Chips': CodeChips.Inject(
            $('#injection-div2'), 
            {
                languageJson:   codeChipsConfig.language,
                themeJson:      codeChipsConfig.darkColorfulTheme,
                toolboxJson:    codeChipsConfig.toolbox,
                quickReplace:   codeChipsConfig.quickReplace
            }
        ),
        'Java Classes': CodeChips.Inject(
            $('#injection-div1'), 
            {
                languageJson:   javaClassDef.language,
                themeJson:      javaClassDef.darkTheme,
                toolboxJson:    javaClassDef.toolbox,
                quickReplace:   javaClassDef.quickReplace
            }
        ),
    };

    let toJs = (code) => {
        let visitor = new ToJavascriptVisitor();
        let host = new AstHost(visitor);
        
        host.Accept(code);
    
        return visitor.GetResult();
    };

    editors['Code Chips'].SetOnExecute( code => eval(toJs(code)) );
    editors['Code Chips'].SetOnConvertToJs( code => toJs(code) );

    let themes = {
        'Code Chips': { 
            'Dark Colorful Theme':      codeChipsConfig.darkColorfulTheme, 
            'Light Colorful Theme':     codeChipsConfig.colorfulTheme, 
            'Dark Theme':               codeChipsConfig.darkTheme,
            'Light Theme':              codeChipsConfig.lightTheme
        },
        'Java Classes': {
            'Dark Theme':               javaClassDef.darkTheme,
            'Light Theme':              javaClassDef.lightTheme
        }
    };

    let selectedThemes = {
        'Code Chips':       'Dark Colorful Theme',
        'Java Classes':     'Dark Theme'
    };

    let curr = 'Code Chips';

    for (let theme in themes[curr])
        $('#theme-selection').append(`<option value="${theme}"> ${theme} </option>`);

    editors['Java Classes'].$container.toggle();

    $('#language-selection').on('change', function() {
        editors[curr].$container.toggle(); 
        curr = this.value;
        editors[curr].$container.toggle();

        $('#theme-selection').empty();

        for (let theme in themes[curr])
            $('#theme-selection').append(`<option value="${theme}"> ${theme} </option>`);

        $('#theme-selection').val(selectedThemes[curr]);
    });

    $('#theme-selection').on('change', function() {
        editors[curr].SetTheme(themes[curr][this.value]);
        editors[curr].ApplyTheme();
        selectedThemes[curr] = this.value;
    });

});