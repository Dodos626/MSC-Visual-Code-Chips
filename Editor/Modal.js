export class modal {
  name;
  text;
  buttons = [];
  handlers = [];
  input = "";

  $modal
  $modal_content
  $text
  $input_container
  
  $container

  constructor(name, text, buttons, handlers, $container) {
    this.name = name;
    this.text = text;
    this.buttons = buttons;
    this.handlers = handlers;
    
    this.$container = $container;
    this.Render($container);
  }

  Render($container) {
    this.$modal = $('<div/>').addClass('modal').attr('id', 'modal'+this.name);
    this.$modal_content = $('<div/>').addClass('modal-content');
    
    let $close_button = $('<span/>').addClass('close').html('&times;');
    $close_button.click(() => { this.Close_() });
    this.$modal_content.append($close_button);

    this.$text = $('<div/>').addClass('text').html(this.text);
    this.$modal_content.append(this.$text);

    this.$input_container = $('<input/>').addClass("input-container").attr('id', 'input-container'+this.name).attr("type", "text").attr("autocomplete", "off");
    
    this.$modal_content.append(this.$input_container);

    this.$buttons = $('<div/>').addClass('buttons');
    
    for (let i = 0; i < this.buttons.length; i++) {
      let $button = $('<button/>').addClass('button').html(this.buttons[i]).css("width", (60/this.buttons.length)+"%");
      $button.click(this.handlers[i]);
      this.$buttons.append($button);
    }
    this.$modal_content.append(this.$buttons);

    this.$modal.append(this.$modal_content);
    $container.append(this.$modal);
    this.AddWindowEvent()
  }

  Open_(){
    $("div#modal"+this.name).css('display', 'block');
  }

  Close_(){
    $("div#modal"+this.name).css('display', 'none');
  }

  GetInputValue(){
    this.input = this.$input_container.val();
    this.$input_container.val("");
    return this.input;
  }

  AddWindowEvent(){
    //closes the modal if clicked outside of the window
    let modal_finder = "div#modal"+this.name;
        document.addEventListener(
            "click",
            function(event) {
                if (event.target.matches(modal_finder)) {
                    $(modal_finder).css('display', 'none');
                }
            },
            false
        )
  }

  ApplyTheme(Themes){
    console.log(Themes);

    this.$modal_content.css(
      "background-color",Themes['Toolbox Menu']['theme']['BackgroundColor']
    ).css(
        "color", Themes['Toolbox Menu Label']['theme']['FontColor']
    )
      
    this.$buttons.children().css(
      "color", Themes['Toolbox Menu Label']['theme']['FontColor']
    ).css(
      "background-color", Themes['Toolbox Menu']['theme']['BackgroundColor']
    ).css(
      "border-color", "rgba(255,255,255,0.1)"
    ).hover(
      function(){
        $(this).css("background-color","rgba(255,255,255,0.2)");
      },
      function(){
        $(this).css("background-color",Themes['Toolbox Menu']['theme']['BackgroundColor'])
      }
    )
      
  }

  
}