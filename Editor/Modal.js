export class modal {
  name;
  text;
  buttons = [];
  handlers = [];

  has_input = false;
  open_on_render = false;
  input = "";
  on_close;

  $modal
  $modal_content
  $text
  $input_container
  
  $container

  /** 
   *  @param {string} name the name of the modal
   *  @param {string} text the text of the modal
   *  @param {boolean} input if the modal has a text input field
   *  @param {boolean} open_on_render if the modal will pop up on render
   *  @param {string[]} buttons the buttons of the modal
   *  @param {function[]} handlers the handlers of the buttons
   *  @param {function} on_close the function to run when the modal is closed
   */
  constructor(name, text, input, open_on_render, buttons, handlers, on_close, $container) {
    this.name = name;
    this.text = text;
    this.buttons = buttons;
    this.handlers = handlers;
    this.open_on_render = open_on_render;
    this.has_input = input;
    this.on_close = on_close;
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

    if(this.has_input){
      this.$input_container = $('<input/>').addClass("input-container").attr('id', 'input-container'+this.name).attr("type", "text").attr("autocomplete", "off");
    
      this.$modal_content.append(this.$input_container);
    }
    

    this.$buttons = $('<div/>').addClass('buttons');
    

    for (let i = 0; i < this.buttons.length; i++) {
      
      if(i % 2 == 0){
        this.$button_row = $('<div/>').addClass('button-row');
      }

      let $button = $('<button/>').addClass('button').html(this.buttons[i]).css("width", (60/(this.buttons.length == 1 ? 1 : 2))+"%");
      $button.click(this.handlers[i]);
      this.$buttons.append($button);
    }
    this.$modal_content.append(this.$buttons);

    this.$modal.append(this.$modal_content);
    $container.append(this.$modal);
    this.AddWindowEvent()
    if(this.open_on_render){
      this.Open_();
    }
  }

  Open_(){
    $("div#modal"+this.name).css('display', 'block');
  }

  Close_(){
    $("div#modal"+this.name).css('display', 'none');
    if(this.on_close != null){
      this.on_close();
    }
    if(!this.has_input) return;
    this.$input_container.val("");
  }

  GetInputValue(){
    if(!this.has_input) return null;
    this.input = this.$input_container.val();
    this.$input_container.val("");
    return this.input;
  }

  AddWindowEvent(){
    //closes the modal if clicked outside of the window
    let modal_finder = "div#modal"+this.name;
    let self = this;
        document.addEventListener(
            "click",
            function(event) {
                if (event.target.matches(modal_finder)) {
                    self.Close_();
                }
            },
            false
        )
  }

  ApplyTheme(Themes){
    //console.log(Themes);

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