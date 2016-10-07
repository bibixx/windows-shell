import { move } from "./move";

export function addListeners() {
  const $hidden = this.hiddenEl;
  const $window = this.windowEl;

  $window.addEventListener("focus", (e) => {
    $window.className = $window.className.replace(" focused", "") + " focused";
    $hidden.focus();
  });

  $window.addEventListener("click", (e) => {
    $window.className = $window.className.replace(" focused", "") + " focused";
    $hidden.focus();
  });

  $hidden.addEventListener("blur", (e) => {
    $window.className = $window.className.replace(" focused", "");
  });


  $hidden.addEventListener("keyup", (e) => {
    const $active = this.activeEl;
    const out = $hidden.value.replace(/\n/g,"");
    $hidden.value = out;

    if( e.keyCode !== 13 ){
      $active.children[0].innerHTML = out;
    } else {
      this._getCommand( out );
      $hidden.value = "";
    }
  });

  move.call(this, $window);
}
