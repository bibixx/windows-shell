import { square, diag } from './lib';

function $(a) { return document.querySelector(a); }

const $hidden = $("textarea#hidden");

class cmd {
  constructor() {
    this.commands = {
      "echo": {"call": this._echo, "desc": "Displays messages, or turns command echoing on or off."},
      "help": {"call": this._help, "desc": "Provides gelp information for Windows commands."},
      "cls":  {"call": this._clear, "desc": "Clears the screen."},
    };

    this.activeEl = {};

    this._createWindow();
    this._print(["Microsoft Windows [Version 10.0.10586]", "(c) 2015 Microsoft Corporation. All rights reserved."]);
    this._addListeners();

    return this;
  }

  _createWindow() {
    const doc = document;
    let $window = doc.createElement("div");
        $window.setAttribute("class", "window");
        $window.setAttribute("tabindex", "1");

    let $windowHeader = doc.createElement("div");
        $windowHeader.setAttribute("class", "window-header");



    let $icon = doc.createElement("div");
        $icon.setAttribute("class", "icon");



    let $iconHeader = doc.createElement("div");
        $iconHeader.setAttribute("class", "icon-header");

    let $dots = doc.createElement("div");
        $dots.setAttribute("class", "dots");

    let $iconMain = doc.createElement("div");
        $iconMain.setAttribute("class", "icon-main");

    let $iconMainSpan = doc.createElement("span");
        $iconMainSpan.appendChild( doc.createTextNode("C:\\") );

    $iconMain.appendChild( $iconMainSpan );
    $icon.appendChild( $iconHeader );

    $iconHeader.appendChild( $dots );

    $icon.appendChild( $iconHeader );
    $icon.appendChild( $iconMain );


    let $controls = doc.createElement("div");
        $controls.setAttribute("class", "controls");

    let $controlsMin = doc.createElement("div");
        $controlsMin.setAttribute("id", "min");
        $controlsMin.setAttribute("title", "Minimize");

    let $controlsMax = doc.createElement("div");
        $controlsMax.setAttribute("id", "max");
        $controlsMax.setAttribute("title", "Maximize");

    let $controlsClose = doc.createElement("div");
        $controlsClose.setAttribute("id", "close");
        $controlsClose.setAttribute("title", "Close");



    $controls.appendChild( $controlsMin );
    $controls.appendChild( $controlsMax );
    $controls.appendChild( $controlsClose );



    let $headerSpan = doc.createElement("span");
        $headerSpan.appendChild( doc.createTextNode("C:\\Windows\\system32\\cmd.exe") );


    let $windowMain = doc.createElement("div");
        $windowMain.setAttribute("class", "window-main");


    $windowHeader.appendChild( $icon );
    $windowHeader.appendChild( $headerSpan );
    $windowHeader.appendChild( $controls );
    $window.appendChild( $windowHeader );
    $window.appendChild( $windowMain );

    this.windowMain = $windowMain;
    this.windowEl = $window;

    doc.body.appendChild( $window );
  }

  _output(text) {
    const $windowMain = this.windowMain;

    let $line = document.createElement("p");
        $line.setAttribute("class", "line");
        $line.innerHTML = text;

    $windowMain.appendChild( $line );
  }

  _print(text, out){
    if( this.activeEl.nodeName ){
      this.activeEl.removeAttribute("id");
    }

    out = (typeof(out) == "undefined") ? true : out;

    text = text || [];

    text.concat([""]).forEach( (v) => {
      this._output(v);
    });

    let $active = document.createElement("p");
        $active.setAttribute("class", "line");
        $active.setAttribute("id", "active");
        $active.innerHTML = "C:\\Users\\Bartek><span class='command'></span>";

    if( out ){
      this.windowMain.appendChild( $active );
      this.windowMain.scrollTop = this.windowMain.scrollHeight;

      this.activeEl = $active;
    }

  }

  _getCommand(s){
    const commands = s.split(" ");
    const command = commands[0].toLowerCase();
    if( typeof(this.commands[command]) != "undefined"  ){
      this._print( this.commands[command].call( this, commands.slice(1) ) );
    } else {
      this._print( [`'${commands[0]}' is not recognized as an internal or external command,<br>operable program or batch file.`] );
    }
  }

  _addListeners() {
    this.windowEl.addEventListener("focus", (e) => {
      $hidden.focus();
    });

    this.windowEl.addEventListener("click", (e) => {
      $hidden.focus();
    });


    $hidden.addEventListener("keyup", (e) => {
      let $active = this.activeEl;
      let out = $hidden.value.replace(/\n/g,"");
      $hidden.value = out;

      if( e.keyCode !== 13 ){
        $active.children[0].innerHTML = out;
      } else {
        this._getCommand( out );
        $hidden.value = "";
      }
    });

  }


  // COMMANDS

  _echo(t, v) {
    return [v.join("")];
  }

  _help(t, v){
    const com = t.commands;
    let keys = [];
    let out = [];
    let maxLength = 0;

    if( v.length > 0 ) {

    } else {
      for (let key in com) {
        keys[key] = com[key].desc;
        maxLength = Math.max(maxLength, key.length);
      }

      for (let i in keys) {
        let v = keys[i];
        out.push( i.toUpperCase()+(Array((maxLength+3) - i.length).join(" "))+v );
      }
    }

    return out.concat(["", "For more information on tools see the command-line reference in the online help.", ""]);
  }

  _clear(t) {
    t.windowMain.innerHTML = "";
    return "";
  }

}

let c = new cmd();
