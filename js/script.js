import { createWindow } from './new-window';
import { output, print } from './output';
import { getCommand } from './get-command';
import { addListeners } from './add-listeners';

import { commands } from './commands/index';

import { echo } from './commands/echo';
import { help } from './commands/help';
import { clear } from './commands/clear';

class cmd {
  constructor() {
    this.commands = commands.call(this);

    this.activeEl = {};

    this._createWindow();
    this._print(["Microsoft Windows [Version 10.0.10586]", "(c) 2015 Microsoft Corporation. All rights reserved."]);
    this._addListeners();

    return this;
  }

  _createWindow() {
    return createWindow.call(this);
  }

  _output(text) {
    return output.call(this, text);
  }

  _print(text, out){
    return print.call(this, text, out);
  }

  _getCommand(s){
    return getCommand.call(this, s);
  }

  _addListeners() {
    return addListeners.call(this);
  }



  // COMMANDS
  _echo(t, v) {
    return echo.call(this, t, v);
  }

  _help(t, v){
    return help.call(this, t, v);
  }

  _clear(t) {
    return clear.call(this, t);
  }

}

let c = new cmd();
