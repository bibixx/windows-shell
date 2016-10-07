export function commands() {
  return {
    "echo": {"call": this._echo, "desc": "Displays messages, or turns command echoing on or off."},
    "help": {"call": this._help, "desc": "Provides gelp information for Windows commands."},
    "cls":  {"call": this._clear, "desc": "Clears the screen."},
  };
}
