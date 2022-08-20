export class modal {
  name;
  text;
  buttons = [];
  handlers = [];
  input;

  $modal
  $modal_content
  $text
  
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

    

    this.$buttons = $('<div/>').addClass('buttons');
    
    for (let i = 0; i < this.buttons.length; i++) {
      let $button = $('<button/>').addClass('button').html(this.buttons[i]);
      $button.click(this.handlers[i]);
      this.$buttons.append($button);
    }
    this.$modal_content.append(this.$buttons);

    this.$modal.append(this.$modal_content);
    $container.append(this.$modal);
    
  }

  Open_(){
    $("div#modal"+this.name).css('display', 'block');
  }

  Close_(){
    $("div#modal"+this.name).css('display', 'none');
  }

  GetInputValue(){
    return "victory";
  }

}