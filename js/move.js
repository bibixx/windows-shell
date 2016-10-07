export function move($window) {
  this.windowHeader.addEventListener("mousedown", (e) => {
    document.start = {
      startX: e.pageX,
      startPosX: $window.getBoundingClientRect().left,

      startY: e.pageY,
      startPosY: $window.getBoundingClientRect().top,

      $window: $window
    };

    document.addEventListener("mousemove", mousemove);

    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", mousemove);
      document.start = undefined;
    });

  });
}

function mousemove (e) {
  const $window = this.start.$window;

  $window.style.left = this.start.startPosX + (e.pageX - this.start.startX)+"px";
  $window.style.top = this.start.startPosY + (e.pageY - this.start.startY)+"px";
}
