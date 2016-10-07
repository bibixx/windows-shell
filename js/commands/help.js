export function help(t, v){
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
