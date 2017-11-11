// init global vars
var taskbarProg = document.getElementsByClassName("taskbar-program");
var mainDesktop = document.getElementsByClassName("main-desktop")[0];
var openWindow = document.getElementsByClassName("open-window");

// Change active window/open-program/deactivate window  -- Also make a window active when taskbar name is clicked
for (i = 1; i < taskbarProg.length; i++) {
  taskbarProg[i].addEventListener("click", openProgram);
}

function openProgram() {
  if (this.classList.contains("open-program")) {
    this.classList.remove("open-program");

    // deactivate window
    for (i = 0; i < openWindow.length; i++) {
      if (
        this.getAttribute("data-window") ==
        openWindow[i].getAttribute("data-window")
      ) {
        if (openWindow[i].classList.contains("active-window")) {
          openWindow[i].classList.remove("active-window");
          openWindow[i].classList.add("minimized-window");
          break;
        }
      }
    }
  } else {
    this.classList.add("open-program");

    // activate window when clicked on corresponding taskbar name
    for (i = 0; i < openWindow.length; i++) {
      if (
        this.getAttribute("data-window") ==
        openWindow[i].getAttribute("data-window")
      ) {
        if (!openWindow[i].classList.contains("active-window")) {
          openWindow[i].classList.add("active-window");
          if (openWindow[i].classList.contains("minimized-window")) {
            openWindow[i].classList.remove("minimized-window");
            break;
          } else {
            break;
          }
        }
      }
    }
  }
}

// Deactivate programs when clicked on desktop
mainDesktop.addEventListener("click", closeProgram);

function closeProgram() {
  for (i = 1; i < taskbarProg.length; i++) {
    if (taskbarProg[i].classList.contains("open-program")) {
      taskbarProg[i].classList.remove("open-program");
    }
  }

  var openWindow = document.getElementsByClassName("open-window");
  for (f = 0; f < openWindow.length; f++) {
    if (openWindow[f].classList.contains("active-window")) {
      openWindow[f].classList.remove("active-window");
    }
  }
}

// Taskbar clock
var clockDiv = document.getElementsByClassName("time")[0];

var updateTime = setInterval(timeUpdate, 1000);

function timeUpdate() {
  var theDate = new Date();
  var theHour = theDate.getHours();
  var theMinute = theDate.getMinutes();
  clockDiv.innerHTML = theHour + ":" + (theMinute < 10 ? "0" : "") + theMinute;
}

// activate open windows
for (f = 0; f < openWindow.length; f++) {
  openWindow[f].addEventListener("click", activeWindow);
}

function activeWindow() {
  if (!this.classList.contains("active-window")) {
    if (this.classList.contains("minimized-window")) {
      this.classList.remove("active-window");
    } else {
      this.classList.add("active-window");

      // activate corresponding taskbar icon
      for (i = 1; i < taskbarProg.length; i++) {
        if (
          this.getAttribute("data-window") ==
          taskbarProg[i].getAttribute("data-window")
        ) {
          if (!this.classList.contains("minimized-window")) {
            if (!taskbarProg[i].classList.contains("open-program")) {
              taskbarProg[i].classList.add("open-program");
              break;
            }
          }
        }
      }
    }
  }
}

// close window
var getClose = document.getElementsByClassName("fa-close");

for (o = 0; o < getClose.length; o++) {
  getClose[o].addEventListener("click", closeWindow);
}

function closeWindow() {
  var data = this.parentElement.parentElement.getAttribute("data-window");
  var theCurrent = this.parentElement.parentElement;

  for (i = 1; i < taskbarProg.length; i++) {
    if (taskbarProg[i].getAttribute("data-window") == data) {
      theCurrent.remove();
      taskbarProg[i].remove();
      break;
    }
  }
}

// hide/unhide menu
var theMenu = document.getElementsByClassName("menu")[0];
var desktop = document.getElementsByClassName("desktop")[0];

desktop.addEventListener("click", function() {
  var getSub = document.getElementsByClassName("menu-dropdown")[0];
  if (!getSub.classList.contains("menu-dropdown-hide")) {
    getSub.classList.add("menu-dropdown-hide");
    taskbarProg[0].classList.remove("active-menu");
  }
});

theMenu.addEventListener("click", function() {
  var getSub = document.getElementsByClassName("menu-dropdown")[0];

  if (!getSub.classList.contains("menu-dropdown-hide")) {
    getSub.classList.add("menu-dropdown-hide");
    theMenu.classList.remove("active-menu");
  } else {
    getSub.classList.remove("menu-dropdown-hide");
    theMenu.classList.add("active-menu");
  }
});

// maximize window
var maxBtn = document.getElementsByClassName("fa-window-maximize");

for (x = 0; x < maxBtn.length; x++) {
  maxBtn[x].addEventListener("click", maxWindow);
}

function maxWindow() {
  var theParent = this.parentElement.parentElement;
  var theHeight = window.innerHeight - 30;

  if (!theParent.classList.contains("window-maximized")) {
    theParent.classList.add("window-maximized");
    theParent.style.height = theHeight + "px";
  } else {
    theParent.classList.remove("window-maximized");
  }
}

// minimize window
var minBtn = document.getElementsByClassName("fa-window-minimize");

for (var k = 0; k < minBtn.length; k++) {
  minBtn[k].addEventListener("click", minWindow);
}

function minWindow() {
  var theParent = this.parentElement.parentElement;
  theParent.classList.add("minimized-window");
  theParent.classList.remove("active-window");
  taskbarProg[1].classList.remove('open-program');
}

// open desktop icons
function openIcon(theItem) {
  var attr = theItem.getAttribute('data-window');
  
  // create taskbar program div
  var theTaskbar = document.getElementById('taskbar');
  var taskbar = document.createElement('div');
  taskbar.setAttribute('class', 'taskbar-item taskbar-program open-program');
  if (attr == "filemanager") {
    taskbar.setAttribute('data-window', 'filemanager');
  } else {
    taskbar.setAttribute('data-window', 'recyclebin');
  }
  taskbar.addEventListener('click', openProgram, false);
  var theText = (attr == "filemanager") ? "File Manager" : "Recycle Bin";
  var text = document.createTextNode(theText)
  var createI = document.createElement('i');
  if (attr == "filemanager") {
    createI.setAttribute('class', 'fa fa-folder menu-item-icon');
    taskbar.appendChild(createI);
  } else if (attr == "recyclebin") {
    createI.setAttribute('class', 'fa fa-trash menu-item-icon');
    taskbar.appendChild(createI);
  }
  taskbar.appendChild(text);
  var before = document.getElementsByClassName('right-side')[0];
  theTaskbar.insertBefore(taskbar, before);
  
  // create the window
  var newWindow = document.createElement('div');
  newWindow.setAttribute('class', 'open-window active-window');
  newWindow.addEventListener('click', activeWindow, false);
  if (attr == "filemanager") {
    newWindow.setAttribute('data-window', 'filemanager');
  } else {
    newWindow.setAttribute('data-window', 'recyclebin');
  }
  var getDesktop = document.getElementsByClassName('desktop')[0];
  getDesktop.appendChild(newWindow);
  var createTitleBar = document.createElement('div');
  createTitleBar.setAttribute('class', 'titlebar');
  var createClose = document.createElement('i');
  createClose.setAttribute('class', 'fa fa-close titlebar-icons');
  createClose.addEventListener('click', closeWindow, false);
  var createMax = document.createElement('i');
  createMax.setAttribute('class', 'fa fa-window-maximize titlebar-icons');
  createMax.addEventListener('click', maxWindow, false);
  var createMin = document.createElement('i');
  createMin.setAttribute('class', 'fa fa-window-minimize titlebar-icons');
  createMin.addEventListener('click', minWindow, false);
  var createUp = document.createElement('i');
  createUp.setAttribute('class', 'fa fa-arrow-up titlebar-icons');
  var createTitle = document.createElement('span');
  createTitle.setAttribute('class', 'window-title');
  var titleText = (attr == "filemanager") ? "chris - File Manager" : "chris - Recycle Bin";
  var addText = document.createTextNode(titleText);
  createTitle.appendChild(addText);
  var createIcon = document.createElement('span');
  if (attr == "filemanager") {
    createIcon.setAttribute('class', 'fa fa-folder window-icon');
  } else {
    createIcon.setAttribute('class', 'fa fa-trash window-icon');
  }
  newWindow.appendChild(createTitleBar);
  createTitleBar.appendChild(createClose);
  createTitleBar.appendChild(createMax);
  createTitleBar.appendChild(createMin);
  createTitleBar.appendChild(createUp);
  createTitleBar.appendChild(createTitle);
  createTitleBar.appendChild(createIcon);
}

// moveable jQuery  
$(document).ready(function() {
  // resize
  var par = $(".titlebar").parent();
  
  $(par).resizable({
    minWidth: 300,
    minHeight: 200
  });
  
  $(par).draggable({ handle: ".titlebar" });
  
  $('body').on('DOMNodeInserted',function(e){
    $('.open-window').draggable();
    
    $('.open-window').resizable({
      minWidth: 300,
      minHeight: 200
    });
  });

  // desktop icon
  $(".desktop-icon").draggable();
});







/////////////////////////////////////

var winIable = interact('.window');
winIable.styleCursor(false);
winIable.draggable({
  inertia:false,
  restrict: {
    restriction: document.querySelector('main'),
    endOnly:false,
    elementRect:{top: 0, left:0, right:1, bottom:0.9}
  },
  onmove: dragMoveListener
});
winIable.resizable({
  preserveAspectRatio:false,
  edges: {top: false, right:true, bottom:true, left:true}
});

function dragMoveListener(event) {
  var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

$('.max').click(function() {
  $('.window').toggleClass('maximized');
});
