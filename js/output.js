export function output(text) {
  const $windowMain = this.windowMain;

  let $line = document.createElement("p");
      $line.setAttribute("class", "line");
      $line.innerHTML = text;

  $windowMain.appendChild( $line );
}

export function print(text, out){
  if( this.activeEl.nodeName ){
    this.activeEl.removeAttribute("id");
  }

  out = (typeof(out) == "undefined") ? true : out;

  text = text || [];

  text = (text.length > 0) ? text.concat([""]) : text;

  text.forEach( (v) => {
    this._output(v);
  });

  let $active = document.createElement("p");
      $active.setAttribute("class", "line");
      $active.setAttribute("id", "active");
      $active.innerHTML = "C:\\Users\\Bartek><span class='command'></span>";

  this.windowMain.scrollTop = this.windowMain.scrollHeight;

  if( out ){
    this.windowMain.appendChild( $active );

    this.activeEl = $active;
  }

}
