export function getCommand(s){
  const commands = s.split(" ");
  const command = commands[0].toLowerCase();


  if( typeof(this.commands[command]) != "undefined"  ){
    this._print( this.commands[command].call( this, commands.slice(1) ) );
  } else if ( commands.length === 1 && commands[0] === "" ){
    this._print( [] );    
  } else {
    this._print( [`'${commands[0]}' is not recognized as an internal or external command,<br>operable program or batch file.`] );
  }
}
