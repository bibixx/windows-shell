export function createWindow() {
  const doc = document;

  const $window = doc.createElement("div"); // Create main window
        $window.setAttribute("class", "window");
        $window.setAttribute("tabindex", "1");

  const $windowHeader = doc.createElement("div"); // Create window header
        $windowHeader.setAttribute("class", "window-header");

  const $hidden = doc.createElement("textarea"); // Create hidden textarea
        $hidden.setAttribute("class", "hidden");
        $hidden.setAttribute("autocomplete", "off");
        $hidden.setAttribute("autocorrect", "off");
        $hidden.setAttribute("autocapitalize", "off");
        $hidden.setAttribute("spellcheck", "false");


  const $icon = doc.createElement("div"); // Create container for icon for header
        $icon.setAttribute("class", "icon");

  const $iconHeader = doc.createElement("div"); // Create top bar of icon
        $iconHeader.setAttribute("class", "icon-header");

  const $dots = doc.createElement("div"); // Create dots in top bar
        $dots.setAttribute("class", "dots");

  const $iconMain = doc.createElement("div"); // Create main body of an icon
        $iconMain.setAttribute("class", "icon-main");

  const $iconMainSpan = doc.createElement("span"); // Create text in body icon
        $iconMainSpan.appendChild( doc.createTextNode("C:\\") );

  $iconHeader.appendChild( $dots ); // Append dots to icon header

  $iconMain.appendChild( $iconMainSpan ); // Append text icon to icon body
  $icon.appendChild( $iconHeader ); // Append icon header to icon container

  $icon.appendChild( $iconHeader ); // Append icon header to icon container
  $icon.appendChild( $iconMain ); // Append icon body to icon container


  const $controls = doc.createElement("div"); // Create container for controls
        $controls.setAttribute("class", "controls");

  const $controlsMin = doc.createElement("div"); // Create minimize button
        $controlsMin.setAttribute("id", "min");
        $controlsMin.setAttribute("title", "Minimize");

  const $controlsMax = doc.createElement("div"); // Create maximize button
        $controlsMax.setAttribute("id", "max");
        $controlsMax.setAttribute("title", "Maximize");

  const $controlsClose = doc.createElement("div"); // Create close button
        $controlsClose.setAttribute("id", "close");
        $controlsClose.setAttribute("title", "Close");


  $controls.appendChild( $controlsMin ); // Append minimize button to container
  $controls.appendChild( $controlsMax ); // Append maximize button to container
  $controls.appendChild( $controlsClose ); // Append close button to container


  const $headerSpan = doc.createElement("span"); // Create header text
        $headerSpan.appendChild( doc.createTextNode("C:\\Windows\\system32\\cmd.exe") );


  const $windowMain = doc.createElement("div"); // Create window body
        $windowMain.setAttribute("class", "window-main");


  $windowHeader.appendChild( $icon ); // Append icon to header
  $windowHeader.appendChild( $headerSpan ); // Append text to header
  $windowHeader.appendChild( $controls ); // Append controls to header
  $window.appendChild( $hidden ); // Append header to window
  $window.appendChild( $windowHeader ); // Append header to window
  $window.appendChild( $windowMain ); // Append body to window

  this.windowMain = $windowMain;
  this.windowEl = $window;
  this.hiddenEl = $hidden;

  doc.body.appendChild( $window ); // Append window to body
}
